import { type Config } from 'tailwindcss';
import repoConfig from '@repo/tw-config';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  presets: [repoConfig],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
