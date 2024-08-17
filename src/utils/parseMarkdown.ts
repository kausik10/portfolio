import matter from 'gray-matter';

export interface BlogMetadata {
  title: string;
  image: string;
}

export interface ParsedMarkdown {
  metadata: BlogMetadata;
  content: string;
}

export const parseMarkdown = (fileContent: string): ParsedMarkdown => {
  const { data, content } = matter(fileContent);
  return { metadata: data as BlogMetadata, content };
};
