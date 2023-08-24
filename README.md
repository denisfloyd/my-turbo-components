# Design System built with tailwindcss

<p align="center">
  <a href="https://linkedin.com/in/denis-ladeira-814365115/">
    <img alt="Denis Mendonça Ladeira" src="https://img.shields.io/badge/-DenisLadeira-gray?style=flat&logo=Linkedin&logoColor=white" />
  </a>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/denisfloyd/my-turbo-components?color=gray">
  <a href="https://github.com/denisfloyd/my-turbo-components/commits/dev_v1">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/denisfloyd/my-turbo-components?color=gray">
  </a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-gray">
</p>

# :pushpin: Table of Contents

* [Technologies](#computer-technologies)
* [How to Run](#construction_worker-how-to-run)
* [Run Tests](#test_tube-run-tests)
* [Found a bug? Missing a specific feature?](#bug-issues)
* [Contributing](#tada-contributing)
* [Project definition](#book-project-definition)
* [License](#closed_book-license)

# :computer: Technologies
This guide explains how to use a React design system starter powered by:

- 🏎 [Turborepo](https://turbo.build/repo) — High-performance build system for Monorepos
- 🚀 [React](https://reactjs.org/) — JavaScript library for user interfaces
- 🎨 [TailwindCss](https://tailwindcss.com/) - Utility-first CSS framework for rapidly building modern websites
- 🛠 [Tsup](https://github.com/egoist/tsup) — TypeScript bundler powered by esbuild
- 📖 [Storybook](https://storybook.js.org/) — UI component environment powered by Vite

As well as a few others tools preconfigured:

- [Tailwind-Variants](https://www.tailwind-variants.org/) The power of Tailwind combined with a first-class variant API.
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Changesets](https://github.com/changesets/changesets) for managing versioning and changelogs
- [GitHub Actions](https://github.com/changesets/action) for fully automated package publishing

# :construction_worker: How to run
```bash
# Clone the project on your computer via Download (option Code -> Download ZIP)
    - If you want to do it with Git, make sure you have Git installed,
      follow the link https://git-scm.com/
    - then run the command in terminal:
        $ git clone https://github.com/denisfloyd/my-turbo-components.git

# In the terminal or prompt(cmd), access the project root;
   $ cd my-turbo-components
```

obs. Make sure you have [Node](https://nodejs.org/en/) installed in your computer. I highly recommend to use [pnpm]([https://yarnpkg.com](https://pnpm.io/)) instead npm or yarn to download the dependencies.

### Useful Commands

- `pnpm build` - Build all packages, including the Storybook site
- `pnpm dev` - Run all packages locally and preview with Storybook
- `pnpm prettier` - Prettier all packages
- `pnpm lint` - Lint all packages
- `pnpm test` - Run package tests (you can also run separately on each package)
- `npx changeset` - Generate a changeset
- `pnpm clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)

# :test_tube: Run Tests
```bash
# Install dependencies if you didn't
# Run tests
$ pnpm run test

# Run test coverage
$ pnpm run test:coverage
```

# :bug: Issues

Feel free to **file a new issue** with a respective title and description on the the [My Turbo Components](https://github.com/denismend/my-turbo-components/issues) repository. If you already found a solution to your problem, **i would love to review your pull request**!

# :tada: Contributing

There are many forms to contribute with the project, first of all you can give this github repo a Star.

If you want do help with the code follow the steps bellow

```ps
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.
$ gh repo fork denisfloyd/my-turbo-components
# Clone your fork
$ git clone {your-fork-url}
$ cd my-turbo-components

# Create a branch with your feature
$ git checkout -b {branch-name}

# Make the commit with your changes
$ git commit -m 'Feat: {feature-name}'

# Send the code to your remote branch
$ git push origin {branch-name}
```

# :book: Project Definition

## Turborepo

[Turborepo](https://turbo.build/repo) is a high-performance build system for JavaScript and TypeScript codebases. It was designed after the workflows used by massive software engineering organizations to ship code at scale. Turborepo abstracts the complex configuration needed for monorepos and provides fast, incremental builds with zero-configuration remote caching.

Using Turborepo simplifies managing your design system monorepo, as you can have a single lint, build, test, and release process for all packages. [Learn more](https://vercel.com/blog/monorepos-are-changing-how-teams-build-software) about how monorepos improve your development workflow.

## Apps & Packages

This Turborepo includes the following packages and applications:

- `apps/docs`: Component documentation site with Storybook
- `packages/df-<component-name>`: Component package
- `packages/df-tsconfig`: Shared `tsconfig.json`s used throughout the Turborepo
- `packages/eslint-config-df`: ESLint preset
- `packages/jest-config-df`: Jest preset
<br />
<br />

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/). Workspaces enables us to "hoist" dependencies that are shared between packages to the root `package.json`. This means smaller `node_modules` folders and a better local dev experience. To install a dependency for the entire monorepo, use the `-w` workspaces flag with `pnpm add`.

### Compilation

To make the packages libraries code work across all browsers, we need to compile the raw TypeScript and React code to plain JavaScript. We can accomplish this with `tsup`, which uses `esbuild` to greatly improve performance.

Running `pnpm build` from the root of the Turborepo will run the `build` command defined in each package's `package.json` file. We define for each package a `tsup`config file. Turborepo runs each `build` in parallel and caches & hashes the output to speed up future builds.

E.g `df-button` package, the `build` command (`tsup`) use this setup:

```typescript
export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  minify: true,
  clean: true,
  external: ['react'],
  ...options,
}));
```

`tsup` compiles `src/index.tsx/ts`, which exports all of the components in the design system, into both ES Modules and CommonJS formats as well as their TypeScript types. The `package.json` for `any package, e.g df-button` then instructs the consumer to select the correct format:

```json
{
  "name": "df-button",
  "version": "0.0.0",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "sideEffects": [
    "**/*.css"
  ],
  "license": "MIT",
  "exports": {
    ".": "./dist",
    "./styles.css": "./dist/index.css"
  },
}
```

Run `pnpm build` to confirm compilation is working correctly. You should see a folder e.g. `packages/df-button/dist` which contains the compiled output.

```bash
  apps
    ...
  packages
  └── df-button
    └── dist
        ├── index.d.ts  <-- Types
        ├── index.js    <-- CommonJS version
        └── index.mjs   <-- ES Modules version
```

## Components

Each file inside of `package` is a component inside our design system. For example:

```bash
  apps
    ...
  packages
    └── df-button
    └── df-input
  ...
```

## Versioning & Publishing Packages

This example uses [Changesets](https://github.com/changesets/changesets) to manage versions, create changelogs, and publish to npm. It's configured so you can start publishing packages immediately.

### Generating the Changelog

To generate your changelog, run `npx changeset` in your local branch:

1. **Which packages would you like to include?** – This shows which packages and changed and which have remained the same. By default, no packages are included. Press `space` to select the packages you want to include in the `changeset`.
1. **Which packages should have a major bump?** – Press `space` to select the packages you want to bump versions for.
1. If doing the first major version, confirm you want to release.
1. Write a summary for the changes.
1. Confirm the changeset looks as expected.
1. A new Markdown file will be created in the `changeset` folder with the summary and a list of the packages included.

### Releasing

When you raise a new pull request to GitHub with your `changelogs`, the [GitHub Action](https://github.com/changesets/action) will run the `release` workflow. Then after your changes go to production (`main`), `changeset` will create a "Release's Pull Request" automatically. 

<br />

# :closed_book: License

Released in 2023 :closed_book: License

Made with love by [Denis Ladeira](https://github.com/denisfloyd) 🚀.
This project is under the [MIT license](./LICENSE).
