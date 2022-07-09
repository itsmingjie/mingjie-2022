export interface ITreeItem {
  path: string;
  mode: string;
  type: string;
  sha: string;
  size: number;
  url: string;
}

export interface INote {
  path: string;
  name: string;
  github: string;
  content: string;
}

export interface INoteResponse {
  success: boolean;
  code?: string;
  note?: INote;
}

export interface IPathsResponse {
  success: boolean;
  code?: string;
  paths?: string[];
}
