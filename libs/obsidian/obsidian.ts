const VAULT_ID = '83d82397d350372d';

export const getObsidianUri = (path: string): string => {
  if (path.startsWith('src/site/notes/')) {
    // remove /src/site/notes/ from path
    path = path.substring('src/site/notes/'.length);
  }

  const obsidianUri = `obsidian://open?vault=${VAULT_ID}&file=${path}`;

  return obsidianUri;
};
