import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

import pkg from './package.json';

const commonPlugins = [
  postcss({
    extensions: ['.css'],
    minimize: true,
  }),
  babel(),
];

const external = [
  'react',
  'react-dom',
];

const input = 'lib/index.js'

export default [{
    input,
    external,
    output: {
      name: 'reactNanoSpinner',
      file: pkg.browser,
      format: 'umd',
      globals: {
        react: 'React'
      },
    },
    plugins: [
      ...commonPlugins,
      commonjs()
    ]
  },
  {
    input,
    external,
    plugins: commonPlugins,
    output: [{
        file: pkg.main,
        format: 'cjs'
      },
      {
        file: pkg.module,
        format: 'es'
      }
    ]
  }
];
