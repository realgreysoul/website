import { createClient } from 'contentful';

const client = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN,
});

async function getImages(contentType) {
  try {
    const entries = await client.getEntries({
      content_type: contentType,
      order: 'fields.number',
    });
    return entries.items.map(item => {
      if (contentType === 'fursona') {
        const url = item.fields.url.fields.file.url.startsWith('//') ? 'https:' + item.fields.url.fields.file.url : item.fields.url.fields.file.url;
        return {
          url,
          caption: item.fields.caption,
          alt: item.fields.alt,
        };
      } else if (contentType === 'project') {
        const image = item.fields.image.fields.file.url.startsWith('//') ? 'https:' + item.fields.image.fields.file.url : item.fields.image.fields.file.url;
        return {
          url: item.fields.url,
          image,
          title: item.fields.title,
          description: item.fields.description,
          alt: item.fields.alt,
          umami: item.fields.umami,
        };
      }
    });
  } catch (error) {
    console.error(`Error fetching ${contentType} images:`, error);
    return [];
  }
}

export async function getProjectImages() {
  return getImages('project');
}

export async function getFursonaImages() {
  return getImages('fursona');
}