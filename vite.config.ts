import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   if (command === 'serve') {
//     return {
//       // dev specific config
//       plugins: [react()],
//     }
//   } else {
//     // command === 'build'
//     return {
//       base: '/staple-dashboard/',
//       plugins: [react()],
//       // build specific config
//     }
//   }
// })

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      // dev specific config
      plugins: [react()],

    }
  } else {
    // command === 'build'
    return {
      // build specific config
      base: '/dashboard/',
      plugins: [react()],

    }
  }
})