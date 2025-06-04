import { Client } from '@notionhq/client';

const notionToken = process.env.NOTION_TOKEN;
const databaseId = process.env.NOTION_DATABASE_ID;

export const notion = new Client({ auth: notionToken });

export interface DatabaseItem {
  id: string;
  title: string;
}

export async function getDatabaseItems(): Promise<DatabaseItem[]> {
  if (!databaseId) {
    console.warn('NOTION_DATABASE_ID is not defined');
    return [];
  }

  const { results } = await notion.databases.query({
    database_id: databaseId,
  });

  return results.map((page: any) => {
    const name = page.properties?.Name;
    const title = Array.isArray(name?.title) && name.title.length > 0
      ? name.title[0].plain_text
      : 'Untitled';

    return {
      id: page.id,
      title,
    } as DatabaseItem;
  });
}
