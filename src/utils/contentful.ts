import { createClient } from "contentful";

type ContentfulAsset = {
  fields?: {
    file?: {
      url?: string;
    };
  };
};

type ContentfulItem = {
  sys?: {
    contentType?: {
      sys?: {
        id?: string;
      };
    };
  };
  fields?: Record<string, unknown>;
};

type FursonaImage = {
  url: string;
  caption: string;
  alt: string;
};

type ProjectImage = {
  url: string;
  image: string;
  title: string;
  description: string;
  alt: string;
};

type LinkButton = {
  url: string;
  color: string;
  icon: string;
  label: string;
};

type ContentState = {
  projects: ProjectImage[];
  fursonas: FursonaImage[];
  socials: LinkButton[];
  donates: LinkButton[];
};

type ContentType = keyof ContentState;

const client = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN,
});

const cache = {
  data: null as ContentState | null,
  timestamp: null as number | null,
  promise: null as Promise<ContentState> | null,
  requestedTypes: new Set<ContentType>(),
  loggedTypes: new Set<ContentType>(),
};

const isDev = import.meta.env.DEV;

const TYPE_ORDER: ContentType[] = ["socials", "projects", "donates", "fursonas"];

function getCacheEnabled() {
  return import.meta.env.CONTENTFUL_CACHE_ENABLED === "true" && isDev;
}

function getCacheTTL() {
  return parseInt(import.meta.env.CONTENTFUL_CACHE_TTL || "600000", 10);
}

function isCacheFresh(timestamp: number | null) {
  if (!timestamp) return false;
  return Date.now() - timestamp < getCacheTTL();
}

function buildLogParts(types: ContentType[], data: ContentState) {
  return TYPE_ORDER.filter((t) => types.includes(t) && data[t].length > 0).map(
    (t) => `${data[t].length} ${t}`,
  );
}

function getString(fields: Record<string, unknown>, key: string) {
  const value = fields[key];
  return typeof value === "string" ? value : "";
}

function getImageUrl(imageField: unknown) {
  const url = (imageField as ContentfulAsset | undefined)?.fields?.file?.url;
  if (!url) return "";
  return url.startsWith("//") ? `https:${url}` : url;
}

function processFursona(item: ContentfulItem): FursonaImage | null {
  if (!item?.sys || !item?.fields) return null;

  const { fields } = item;
  return {
    url: getImageUrl(fields.url),
    caption: getString(fields, "caption"),
    alt: getString(fields, "alt"),
  };
}

function processProject(item: ContentfulItem): ProjectImage | null {
  if (!item?.sys || !item?.fields) return null;

  const { fields } = item;
  return {
    url: getString(fields, "url"),
    image: getImageUrl(fields.image),
    title: getString(fields, "title"),
    description: getString(fields, "description"),
    alt: getString(fields, "alt"),
  };
}

function processLinkButton(item: ContentfulItem): LinkButton | null {
  if (!item?.sys || !item?.fields) return null;

  const { fields } = item;
  return {
    url: getString(fields, "url"),
    color: getString(fields, "color"),
    icon: getString(fields, "icon"),
    label: getString(fields, "label"),
  };
}

function exists<T>(value: T | null): value is T {
  return value !== null;
}

async function fetchAllContent(requestedType: ContentType | null = null): Promise<ContentState> {
  const emptyState = { projects: [], fursonas: [], socials: [], donates: [] };

  if (requestedType) cache.requestedTypes.add(requestedType);

  const cachedData = cache.data;
  const cacheTimestamp = cache.timestamp;

  if (getCacheEnabled() && cachedData && isCacheFresh(cacheTimestamp)) {

    const newTypes = Array.from(cache.requestedTypes).filter(
      (t) => !cache.loggedTypes.has(t),
    );
    newTypes.forEach((t) => cache.loggedTypes.add(t));
    cache.requestedTypes.clear();

    const logParts = buildLogParts(newTypes, cachedData);
    if (logParts.length > 0) {
      console.log(`Contentful: loaded ${logParts.join(", ")} (from cache)`);
    }

    return cachedData;
  }

  if (cache.promise) return cache.promise;

  cache.loggedTypes.clear();

  const fetchPromise = (async () => {
    try {
      const prefix = isDev ? "" : "\n";
      console.log(
        `${prefix}Contentful: fetching data via API (${isDev ? "dev" : "production"} mode)`,
      );

      const response = await client.getEntries({
        content_type: "content",
        include: 1,
      });
      const entry = response.items?.[0];

      if (!entry) {
        console.error("Contentful: content entry not found");
        return emptyState;
      }

      const { fields } = entry;
      const result = {
        socials: ((fields.socials || []) as ContentfulItem[])
          .map(processLinkButton)
          .filter(exists),
        projects: ((fields.projects || []) as ContentfulItem[])
          .map(processProject)
          .filter(exists),
        donates: ((fields.donates || []) as ContentfulItem[])
          .map(processLinkButton)
          .filter(exists),
        fursonas: ((fields.fursonas || []) as ContentfulItem[])
          .map(processFursona)
          .filter(exists),
      };

      const requested = Array.from(cache.requestedTypes);
      const logParts = buildLogParts(requested, result);
      requested.forEach((t) => cache.loggedTypes.add(t));
      cache.requestedTypes.clear();

      if (logParts.length > 0) {
        console.log(`Contentful: loaded ${logParts.join(", ")}`);
      }

      if (getCacheEnabled()) {
        cache.data = result;
        cache.timestamp = Date.now();
        console.log(
          `Contentful: cached for dev mode (TTL: ${getCacheTTL() / 1000}s)`,
        );
      }

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
  return (await fetchAllContent("projects")).projects;
}

export async function getFursonaImages() {
  return (await fetchAllContent("fursonas")).fursonas;
}

export async function getSocials() {
  return (await fetchAllContent("socials")).socials;
}

export async function getDonates() {
  return (await fetchAllContent("donates")).donates;
}

export function clearCache() {
  cache.data = null;
  cache.timestamp = null;
  cache.promise = null;
  cache.requestedTypes.clear();
  cache.loggedTypes.clear();
  console.log("Contentful: cache cleared");
}
