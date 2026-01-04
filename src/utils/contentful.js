import { createClient } from 'contentful';

const client = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN,
});

const cache = {
  data: null,
  timestamp: null,
  promise: null,
  requestedTypes: new Set(),
  loggedTypes: new Set(),
};

const isDev = import.meta.env.DEV;
const CACHE_ENABLED = import.meta.env.CONTENTFUL_CACHE_ENABLED === 'true' && isDev;
const CACHE_TTL = parseInt(import.meta.env.CONTENTFUL_CACHE_TTL || '600000', 10);

function isCacheValid() {
  if (!CACHE_ENABLED || !cache.data || !cache.timestamp) {
    return false;
  }
  
  const now = Date.now();
  const cacheAge = now - cache.timestamp;
  
  return cacheAge < CACHE_TTL;
}

function processItem(item) {
  if (!item || !item.sys || !item.fields) return null;

  const { id } = item.sys.contentType.sys;
  const { fields } = item;
  const getImageUrl = (imageField) => {
    if (!imageField?.fields?.file?.url) return '';
    const url = imageField.fields.file.url;
    return url.startsWith('//') ? `https:${url}` : url;
  };

  switch (id) {
    case 'fursona':
      return {
        url: getImageUrl(fields.url),
        caption: fields.caption || '',
        alt: fields.alt || '',
      };
    case 'project':
      return {
        url: fields.url || '',
        image: getImageUrl(fields.image),
        title: fields.title || '',
        description: fields.description || '',
        alt: fields.alt || '',
        umami: fields.umami || '',
      };
    case 'social':
    case 'donate':
      return {
        url: fields.url || '',
        color: fields.color || '',
        icon: fields.icon || '',
        label: fields.label || '',
        umami: fields.umami || '',
      };
    default:
      return null;
  }
}

async function fetchAllContent(requestedType = null) {
  const emptyState = { projects: [], fursonas: [], socials: [], donates: [] };

  if (requestedType) {
    cache.requestedTypes.add(requestedType);
  }

  if (isCacheValid()) {
    const newTypes = [];
    cache.requestedTypes.forEach(type => {
      if (!cache.loggedTypes.has(type)) {
        newTypes.push(type);
        cache.loggedTypes.add(type);
      }
    });

    if (newTypes.length > 0 && cache.data) {
      const logParts = [];
      const { projects, fursonas, socials, donates } = cache.data;
      
      if (newTypes.includes('socials') && socials.length > 0) {
        logParts.push(`${socials.length} socials`);
      }
      if (newTypes.includes('projects') && projects.length > 0) {
        logParts.push(`${projects.length} projects`);
      }
      if (newTypes.includes('donates') && donates.length > 0) {
        logParts.push(`${donates.length} donates`);
      }
      if (newTypes.includes('fursonas') && fursonas.length > 0) {
        logParts.push(`${fursonas.length} fursonas`);
      }

      if (logParts.length > 0) {
        console.log(`Contentful: loaded ${logParts.join(', ')} (from cache)`);
      }
    }

    cache.requestedTypes.clear();
    return cache.data;
  }

  if (cache.promise) {
    return cache.promise;
  }

  cache.loggedTypes.clear();

  const fetchPromise = (async () => {
    try {
      const mode = isDev ? 'dev' : 'production';
      const prefix = isDev ? '' : '\n';
      console.log(`${prefix}Contentful: fetching data via API (${mode} mode)`);
      
      const response = await client.getEntries({
        content_type: 'content',
        include: 1,
      });

      const entry = response.items?.[0];
      if (!entry) {
        console.error("Contentful: content entry not found");
        return emptyState;
      }

      const { fields } = entry;
      const socials = (fields.socials || []).map(processItem).filter(Boolean);
      const projects = (fields.projects || []).map(processItem).filter(Boolean);
      const donates = (fields.donates || []).map(processItem).filter(Boolean);
      const fursonas = (fields.fursonas || []).map(processItem).filter(Boolean);

      const result = { projects, fursonas, socials, donates };

      const requested = Array.from(cache.requestedTypes);
      const logParts = [];
      
      if (requested.includes('socials') && socials.length > 0) {
        logParts.push(`${socials.length} socials`);
        cache.loggedTypes.add('socials');
      }
      if (requested.includes('projects') && projects.length > 0) {
        logParts.push(`${projects.length} projects`);
        cache.loggedTypes.add('projects');
      }
      if (requested.includes('donates') && donates.length > 0) {
        logParts.push(`${donates.length} donates`);
        cache.loggedTypes.add('donates');
      }
      if (requested.includes('fursonas') && fursonas.length > 0) {
        logParts.push(`${fursonas.length} fursonas`);
        cache.loggedTypes.add('fursonas');
      }

      if (logParts.length > 0) {
        console.log(`Contentful: loaded ${logParts.join(', ')}`);
      }

      if (CACHE_ENABLED) {
        cache.data = result;
        cache.timestamp = Date.now();
        console.log(`Contentful: cached for dev mode (TTL: ${CACHE_TTL / 1000}s)`);
      } else if (isDev) {
        console.log('Contentful: caching disabled');
      }

      cache.requestedTypes.clear();

      return result;
    } catch (error) {
      console.error("Contentful: fetch error", error);
      
      if (cache.data) {
        console.warn("Contentful: using stale cache data");
        return cache.data;
      }
      
      return emptyState;
    } finally {
      cache.promise = null;
    }
  })();

  cache.promise = fetchPromise;
  return fetchPromise;
}

export async function getProjectImages() {
  const allContent = await fetchAllContent('projects');
  return allContent.projects;
}

export async function getFursonaImages() {
  const allContent = await fetchAllContent('fursonas');
  return allContent.fursonas;
}

export async function getSocials() {
  const allContent = await fetchAllContent('socials');
  return allContent.socials;
}

export async function getDonates() {
  const allContent = await fetchAllContent('donates');
  return allContent.donates;
}

export function clearCache() {
  cache.data = null;
  cache.timestamp = null;
  cache.promise = null;
  cache.requestedTypes.clear();
  cache.loggedTypes.clear();
  console.log('Contentful: cache cleared');
}