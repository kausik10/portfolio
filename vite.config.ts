import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [
    react(),
  
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.mdx'],
    alias: {
      '@' : path.resolve(__dirname, 'src'),
       '#site/content': path.resolve(__dirname, '.velite'),
    }
  },
});