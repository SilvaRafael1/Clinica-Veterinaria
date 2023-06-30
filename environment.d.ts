export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_PORT: number;
      DB_USER: string;
      JWT_SECRET: SECRET;
      ENV: 'test' | 'dev' | 'prod';
    }
  }
}