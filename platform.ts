import process from 'node:process';

export const isH5 = process.env.UNI_PLATFORM === 'h5';

export const isApp = process.env.UNI_PLATFORM === 'app-plus';

export const isMp = !isH5 && !isApp;

export const WeappTailwindcssDisabled = isH5 || isApp;
