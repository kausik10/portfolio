/// <reference types="vite/client" />
declare module '*.mdx' {
    import { FC } from 'react';
    const Component: FC;
    export default Component;
  }