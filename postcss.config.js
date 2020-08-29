const tailwindcss = require('tailwindcss');
const join = require('path').join;
const tailwindJS = require('./tailwind.config.js');
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.jsx', './src/*.html', './src/**/**/**/*.jsx', './src/**/**/*.jsx'],
  css: ['./src/styles/index.css', './src/styles/tailwind.css'],
  whitelistPatterns: [/xs/, /sm/, /xsl/, /md/],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});
module.exports = {
  plugins: [
    tailwindcss(tailwindJS),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])
  ]
};
