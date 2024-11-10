# React & Node Monorepo boilerplate.

This monorepo is setup with my preferred boilerplate for building NodeJS React projects.

If you prefer to use a different frontend framework you can easily [remove react](#use-a-different-frontend-framework) and install the dependencies for your preferred library.

## Getting started

**Clone this repo locally**

```bash
git clone <url> ./my-app && cd ./my-app\
```

**Remove the git history so you can start fresh**

```bash
rm -rf .git
```

**Now initialize git**

```bash
git init
```

That's it! you can now start building your projects to your hearts content. Happy coding.

## Tips

### Setup storybook.

> _Be sure to do this **AFTER** you setup your frontend library if you [removed react](#use-a-different-frontend-framework)_

I recommend setting up Storybook in the UI library.

```bash
cd ./packages/ui

pnpm dlx storybook@latest init
```

### Use a different frontend framework.

If you'd prefer to use something other than React you can remove all of the react dependencies like so:

```bash
pnpm remove -r react react-dom @vitejs/plugin-react @headlessui/react eslint-plugin-react
```

Then just install the packages you need for your preferred frontend framework.
