import { Config } from 'tailwindcss';

const config: Config = {
  content: [],
  theme: {
    extend: {
      colors(utils) {
        return {
          base: utils.colors.stone,
          primary: utils.colors.cyan,
          secondary: utils.colors.rose,
          info: utils.colors.indigo,
          warning: utils.colors.orange,
          error: utils.colors.red,
          success: utils.colors.green,
        };
      },
    },
  },
  plugins: [],
};

export default config;
