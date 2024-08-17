// src/types.ts
export interface MDXFrontmatter {
    title?: string;
    image?: string;
  }
  
  export interface MDXContent {
    default: React.ComponentType<any>;
    frontmatter?: MDXFrontmatter;
  }
  