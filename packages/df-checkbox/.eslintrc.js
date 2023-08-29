module.exports = {
  root: true,
  extends: ['df'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.mdx'],
  },
};
