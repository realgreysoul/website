import { createClient } from "contentful";

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
const CACHE_ENABLED =
  import.meta.env.CONTENTFUL_CACHE_ENABLED === "true" && isDev;
const CACHE_TTL = parseInt(
  import.meta.env.CONTENTFUL_CACHE_TTL || "600000",
  10,
);

const TYPE_ORDER = ["socials", "projects", "donates", "fursonas"];

function isCacheValid() {
  if (!CACHE_ENABLED || !cache.data || !cache.timestamp) return false;
  return Date.now() - cache.timestamp < CACHE_TTL;
}

function buildLogParts(types, data) {
  return TYPE_ORDER.filter((t) => types.includes(t) && data[t].length > 0).map(
    (t) => `${data[t].length} ${t}`,
  );
}

function processItem(item) {
  if (!item?.sys || !item?.fields) return null;

  const { id } = item.sys.contentType.sys;
  const { fields } = item;
  const getImageUrl = (imageField) => {
    if (!imageField?.fields?.file?.url) return "";
    const url = imageField.fields.file.url;
    return url.startsWith("//") ? `https:${url}` : url;
  };

  switch (id) {
    case "fursona":
      return {
        url: getImageUrl(fields.url),
        caption: fields.caption || "",
        alt: fields.alt || "",
      };
    case "project":
      return {
        url: fields.url || "",
        image: getImageUrl(fields.image),
        title: fields.title || "",
        description: fields.description || "",
        alt: fields.alt || "",
        umami: fields.umami || "",
      };
    case "social":
    case "donate":
      return {
        url: fields.url || "",
        color: fields.color || "",
        icon: fields.icon || "",
        label: fields.label || "",
        umami: fields.umami || "",
      };
    default:
      return null;
  }
}

async function fetchAllContent(requestedType = null) {
  const emptyState = { projects: [], fursonas: [], socials: [], donates: [] };

  if (requestedType) cache.requestedTypes.add(requestedType);

  if (isCacheValid()) {
    const newTypes = Array.from(cache.requestedTypes).filter(
      (t) => !cache.loggedTypes.has(t),
    );
    newTypes.forEach((t) => cache.loggedTypes.add(t));
    cache.requestedTypes.clear();

    const logParts = buildLogParts(newTypes, cache.data);
    if (logParts.length > 0) {
      console.log(`Contentful: loaded ${logParts.join(", ")} (from cache)`);
    }

    return cache.data;
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
        socials: (fields.socials || []).map(processItem).filter(Boolean),
        projects: (fields.projects || []).map(processItem).filter(Boolean),
        donates: (fields.donates || []).map(processItem).filter(Boolean),
        fursonas: (fields.fursonas || []).map(processItem).filter(Boolean),
      };

      const requested = Array.from(cache.requestedTypes);
      const logParts = buildLogParts(requested, result);
      requested.forEach((t) => cache.loggedTypes.add(t));
      cache.requestedTypes.clear();

      if (logParts.length > 0) {
        console.log(`Contentful: loaded ${logParts.join(", ")}`);
      }

      if (CACHE_ENABLED) {
        cache.data = result;
        cache.timestamp = Date.now();
        console.log(
          `Contentful: cached for dev mode (TTL: ${CACHE_TTL / 1000}s)`,
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
