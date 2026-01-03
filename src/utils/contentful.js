import { createClient } from 'contentful';

const client = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN,
});

async function getContent(contentType) {
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
      } else if (contentType === 'social') {
        return {
          url: item.fields.url,
          color: item.fields.color,
          icon: item.fields.icon,
          label: item.fields.label,
          umami: item.fields.umami,
        };
      } else if (contentType === 'donate') {
        return {
          url: item.fields.url,
          color: item.fields.color,
          label: item.fields.label,
          umami: item.fields.umami,
        };
      }
    });
  } catch (error) {
    console.error(`Error fetching ${contentType}:`, error);
    return [];
  }
}

export async function getProjectImages() {
  return getContent('project');
}

export async function getFursonaImages() {
  return getContent('fursona');
}

export async function getSocials() {
  return getContent('social');
}

export async function getDonates() {
  return getContent('donate');
}