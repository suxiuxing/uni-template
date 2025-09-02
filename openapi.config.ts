import path from 'node:path';
import process from 'node:process';
import { generateApi } from 'swagger-typescript-api';
import { loadEnv } from 'vite';

const cwd = process.cwd();

type GenerateApiParams = Parameters<typeof generateApi>[0];

const commonParams: Partial<GenerateApiParams> = {
  modular: true,
  cleanOutput: true,
  templates: path.resolve(cwd, './templates'),
};

const { VITE_API_HOST } = loadEnv(process.env.mode || 'development', cwd);

const gen = async () => {
  await generateApi({
    ...commonParams,
    url: `${VITE_API_HOST}/v3/api-docs/all`,
    output: path.resolve(cwd, './src/swagger'),
  });

  process.exit();
};

gen().catch(console.error);
