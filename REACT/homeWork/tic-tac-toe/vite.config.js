import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //добавил ниже имя проекта на англ
  base: '/tic-tac-toe'
})
