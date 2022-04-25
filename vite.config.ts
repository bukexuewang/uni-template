import { defineConfig } from 'vite'
import path from 'path'
import uni from '@dcloudio/vite-plugin-uni'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

const resolve = (dir: string) => {
  return path.join(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    Components({
      resolvers: [],
      include: [/\.vue$/, /\.vue\?vue/, /[\\/]node_modules[\\/]/],
      exclude: []
    }),
    AutoImport({
      dts: './src/auto-import.d.ts',
      include: [/\.vue$/, /\.tsx?/],
      imports: ['vue'],
      eslintrc: {
        enabled: false, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      }
    })
  ],
  resolve: {
    alias: {
      '~': resolve('/'),
      '@': resolve('src')
    }
  }
})
