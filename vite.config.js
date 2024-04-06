
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  // Specify the entry point of your application
  // Replace 'src/main.tsx' with the path to your TypeScript file
  root: './src',
  // Specify the public directory where your index.html is located
  // Replace 'public' with the path to your public directory
  publicDir: './public',
  // Configure Vite plugins or other options as needed
});
