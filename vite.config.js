import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/amor/', // DEBE SER el nombre de tu repositorio en GitHub
})