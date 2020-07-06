# Story Lab component library

A collection of reusable React components for use in Story Lab ... stories.

## Installation

```bash
npm install @abcnews/story-lab-component-library
```

This library is in its infancy and is barely documented or even useful.

## Development

Get started:

```
git clone https://github.com/abcnews/story-lab-component-library.git
cd story-lab-component-library
npm i
```

This repository uses [TSDX](https://github.com/formik/tsdx) with [Storybook](https://github.com/storybookjs/storybook/).

The recommended workflow is to run TSDX in one terminal and Storybook in another:

```
npm start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

### Storybook

Run inside another terminal:

```
npm run storybook
```

This loads the stories from `./stories`.

> NOTE: Stories should reference the components as if using the library, similar to the example playground. This means importing from the root project directory. This has been aliased in the tsconfig and the storybook webpack config as a helper.

### Build & release

Releases are built and deployed using [np](https://github.com/sindresorhus/np).

```
npm run release
```
