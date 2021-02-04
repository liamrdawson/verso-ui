# Aperture UI

A UI component library build with React, Typescript and Storybook.

The goals of this project are to:

- Build a reusable components library which can be used across projects.
- Publish the component library to npm so that it can be used across projects.
- Learn advanced TypeScript concepts and patterns.
- Learn more about project architecture for scalable projects.

## Project Notes

**`import * as React from 'react'`**
When Typescript compiles the project, the compiler produces the following error where `import React from 'react';` is used:

```zsh
This module is declared with using 'export =', and can only be used with a default import when using the 'esModuleInterop' flag.
```

`export = React;` is required as it essentially replaces the entire exports namespace with the right hand side, meaning all properties of the `React` namespace. It's what allows you to do both a namespace `import import * as React from 'react'` and destructured import `import { Component } from 'react'`.

If you don't want to use `allowSyntheticDefaultImports` you can write an entire namespace import and then do `React.Component`.
