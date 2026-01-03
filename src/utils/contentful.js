import { createClient } from 'contentful';

const client = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getProjectImages() {
  try {
    const entries = await client.getEntries({
      content_type: 'project', // Assuming content type is 'project'
      order: 'fields.number',
    });
    return entries.items.map(item => {
      const image = item.fields.image.fields.file.url.startsWith('//') ? 'https:' + item.fields.image.fields.file.url : item.fields.image.fields.file.url;
      return {
        url: item.fields.url,
        image,
        title: item.fields.title,
        description: item.fields.description,
        alt: item.fields.alt,
        umami: item.fields.umami,
      };
    });
  } catch (error) {
    console.error('Error fetching project images:', error);
    return [];
  }
}

export async function getFursonaImages() {
  try {
    const entries = await client.getEntries({
      content_type: 'fursona', // Assuming content type is 'fursona'
      order: 'fields.number',
    });
    return entries.items.map(item => {
      const url = item.fields.url.fields.file.url.startsWith('//') ? 'https:' + item.fields.url.fields.file.url : item.fields.url.fields.file.url;
      return {
        url,
        caption: item.fields.caption,
        alt: item.fields.alt,
      };
    });
  } catch (error) {
    console.error('Error fetching fursona images:', error);
    return [];
  }
}