import { defineConfig } from 'orval'

const apiUrl = process.env.NEXT_PUBLIC_API_URL
export default defineConfig({
  api: {
    input: `${apiUrl}/docs/json`,
    output: {
      target: './src/http/api.ts',
      client: 'fetch',
      httpClient: 'fetch',
      clean: true,
      baseUrl: apiUrl,
      override: {
        fetch: {
          includeHttpResponseReturnType: false,
        },
      },
    },
  },
})
