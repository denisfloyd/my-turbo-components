module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-df`
  extends: ["df"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
