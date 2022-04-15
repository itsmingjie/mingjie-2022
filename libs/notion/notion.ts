import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

export const getDatabase = async (databaseId: string) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [{ property: 'Posted', direction: 'descending' }],
  });
  return response.results;
};

export const getPage = async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlocks = async (blockId: string) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  });
  return response.results;
};
