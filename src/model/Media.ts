export enum MediaType {
  Image,
  Video,
  Document,
  Audio,
}

export interface Media {
  name: string;
  description: string;
  year?: number;
  tags?: string[];
  resource: {
    url: string;
    type: MediaType;
    size?: number;
  };
}
