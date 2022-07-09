import type { INoteResponse, IPathsResponse, ITreeItem } from './types';

const GITHUB_PAT = process.env.GITHUB_PAT as string;
const GITHUB_REPO = process.env.GITHUB_REPO as string;

const PATH_PREFIX = `src/site/notes`;

export const getNote = async (path: string): Promise<INoteResponse> => {
  const endpoint = `https://api.github.com/repos/${GITHUB_REPO}/contents/${PATH_PREFIX}/${path}.md`;
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github.text',
      Authorization: `token ${GITHUB_PAT}`,
    },
  };

  const response = await fetch(endpoint, options)
    .then((r) => r.json())
    .catch((e) => {
      console.error(e);
      return null;
    });

  if (!response) {
    return {
      success: false,
      code: 'INVALID_RESPONSE',
    };
  } else if (response.message === 'Not Found') {
    return {
      success: false,
      code: 'NOT_FOUND',
    };
  } else if (!response.name.endsWith('.md')) {
    return {
      success: false,
      code: 'INVALID_FILE_TYPE',
    };
  } else if (response.type !== 'file') {
    return {
      success: false,
      code: 'NOT_A_FILE',
    };
  }

  // convert response from base64 to utf8
  const content = Buffer.from(response.content, 'base64').toString();
  return {
    success: true,
    note: {
      path: response.path,
      name: response.name,
      github: response.html_url,
      content,
    },
  };
};

const checkPath = (path: string): boolean => {
  return path.startsWith(PATH_PREFIX) && path.endsWith('.md');
};

export const getPaths = async (): Promise<IPathsResponse> => {
  const endpoint = `https://api.github.com/repos/${GITHUB_REPO}/git/trees/main?recursive=1`;
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `token ${GITHUB_PAT}`,
    },
  };

  const response = await fetch(endpoint, options)
    .then((r) => r.json())
    .catch((e) => {
      console.error(e);
      return null;
    });

  if (!response || !response.tree) {
    return {
      success: false,
      code: 'INVALID_RESPONSE',
    };
  }

  // filter out non-markdown files and invalid paths
  const paths = response.tree
    .filter((item: ITreeItem) => {
      return item.type === 'blob' && checkPath(item.path);
    })
    .map((item: ITreeItem) => {
      return `/notes${item.path.substring(
        PATH_PREFIX.length,
        item.path.length - 3
      )}`;
    });

  return { success: true, paths };
};
