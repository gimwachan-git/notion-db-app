import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.NOTION_DATABASE_ID as string;

export interface DatabaseItem {
  id: string;
  title: string;
}

export async function getDatabaseItems(): Promise<DatabaseItem[]> {
  if (!databaseId) {
    console.warn('NOTION_DATABASE_ID is not defined');
    return [];
  }

  const response = await notion.databases.query({
    database_id: databaseId,
  });

  return response.results.map((page: any) => {
    const titleProperty = page.properties.Name;
    const title = Array.isArray(titleProperty.title)
      ? titleProperty.title[0]?.plain_text || 'Untitled'
      : 'Untitled';

    return {
      id: page.id,
      title,
    } as DatabaseItem;
  });
}
