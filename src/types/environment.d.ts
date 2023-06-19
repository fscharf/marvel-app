export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_URL: string
      NEXT_PUBLIC_PUBLIC_KEY: string
      NEXT_PUBLIC_PRIVATE_KEY: string
    }
  }
}
