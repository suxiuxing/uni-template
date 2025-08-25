import path from 'node:path';
import process from 'node:process';
import type { GenerateApiParams } from 'swagger-typescript-api';
import { generateApi } from 'swagger-typescript-api';
import { loadEnv } from 'vite';

const cwd = process.cwd();

const commonParams: Partial<GenerateApiParams> = {
  modular: true,
  cleanOutput: true,
  templates: path.resolve(cwd, './templates'),
};

const { VITE_API_HOST } = loadEnv(process.env.mod || 'development', cwd);

const gen = async () => {
  await generateApi({
    ...commonParams,
    url: `${VITE_API_HOST}/v3/api-docs/%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90%E6%A8%A1%E5%9D%97`,
    output: path.resolve(cwd, './src/swagger/gen'),
  });

  process.exit();
};

gen().catch(console.error);
