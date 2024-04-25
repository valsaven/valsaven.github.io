const postcssNesting = require('postcss-nesting');

module.exports = {
  plugins: [
    postcssNesting({
      edition: '2024-02',
    }),
  ],
};
