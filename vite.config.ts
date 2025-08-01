import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

const config = defineConfig({
  // ssr: {
  //   noExternal: ['react-native-reanimated'],
  // },
  resolve: {
    extensions: [
      '.web.mts',
      '.web.mjs',
      '.web.tsx',
      '.web.jsx',
      '.web.ts',
      '.web.js',
      '.mts',
      '.mjs',
      '.tsx',
      '.jsx',
      '.ts',
      '.js',
      '.json',
    ],
    alias: {
      'react-native': 'react-native-web',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      resolveExtensions: [
        '.web.mts',
        '.web.mjs',
        '.web.tsx',
        '.web.jsx',
        '.web.ts',
        '.web.js',
        '.mts',
        '.mjs',
        '.tsx',
        '.jsx',
        '.ts',
        '.js',
        '.json',
      ],
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      // plugins: [esbuildFlowPlugin()],
    },
  },
  plugins: [
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart({
      customViteReactPlugin: true,
    }),
    viteReact({
      babel: {
        plugins: [
          '@babel/plugin-proposal-export-namespace-from',
          'react-native-worklets/plugin',
        ],
      },
    }),
  ],
})

export default config
