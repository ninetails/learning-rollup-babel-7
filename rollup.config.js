import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.mjs',
    format: 'es'
  },
  plugins: [
    resolve({
      browser: true,
      jsnext: true
    }),
    commonjs(),
    babel()
  ].concat(
    process.env.NODE_ENV === 'production'
    ? [
        uglify()
      ]
    : []
  )
}
