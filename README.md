# Story Lab component library

A collection of reusable React components for use in Story Lab ... stories.

## Installation

```bash
npm install @abcnews/story-lab-component-library
```

This library is in its infancy and is barely documented or even useful.

## Development

```
git clone https://github.com/abcnews/story-lab-component-library.git
cd story-lab-component-library
npm storybook
```

Components are built using [Rollup](https://rollupjs.org/guide/en/) but the storybook is built with Webpack.

### Build & release

First: Bump the version number, commit & tag.

```bash
git push
npm run build
npm release
```

## Credits

Inspiration was taken from https://blog.harveydelaney.com/creating-your-own-react-component-library/
