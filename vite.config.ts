import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'ProjectSproudUI',
      formats: ['es', 'umd'],
      fileName: (format) => `project-sproud-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom', 'phosphor-react'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-router-dom': 'ReactRouterDOM',
          'phosphor-react': 'PhosphorReact',
        },
      },
    },
  },
  css: {
    postcss: './postcss.config.js',
  },
})