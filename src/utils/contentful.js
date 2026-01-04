import { createClient } from 'contentful';

const client = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN,
});

const cache = {
  data: null,
  timestamp: null,
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

async function fetchAllContent() {
  const emptyState = { projects: [], fursonas: [], socials: [], donates: [] };

  if (isCacheValid()) {
    console.log('Contentful: loaded from cache');
    return cache.data;
  }

  try {
    const mode = isDev ? 'dev' : 'production';
    console.log(`Contentful: fetching data via API (${mode} mode)`);
    
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

    if (CACHE_ENABLED) {
      cache.data = result;
      cache.timestamp = Date.now();
      console.log(`Contentful: cached for dev mode (TTL: ${CACHE_TTL / 1000}s)`);
    } else if (isDev) {
      console.log('Contentful: caching disabled');
    }

    return result;
  } catch (error) {
    console.error("Contentful: fetch error", error);
    
    if (cache.data) {
      console.warn('Contentful: using stale cache data');
      return cache.data;
    }
    
    return emptyState;
  }
}

export async function getProjectImages() {
  const allContent = await fetchAllContent();
  return allContent.projects;
}

export async function getFursonaImages() {
  const allContent = await fetchAllContent();
  return allContent.fursonas;
}

export async function getSocials() {
  const allContent = await fetchAllContent();
  return allContent.socials;
}

export async function getDonates() {
  const allContent = await fetchAllContent();
  return allContent.donates;
}

export function clearCache() {
  cache.data = null;
  cache.timestamp = null;
  console.log('Contentful: cache cleared');
}