import { defineConfig } from 'vite';  // Import defineConfig from vite
import react from '@vitejs/plugin-react';  // Import the React plugin

export default defineConfig({
  base: '/EDPOL210/',  // Ensure this is set to your GitHub repository's name
  plugins: [react()],
});
