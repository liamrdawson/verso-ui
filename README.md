# Verso UI

Verso UI is a library for creating themable user interfaces based on atomic design principles.

Built for image oriented websites and applications, where you can pass in custom tokens and themes to customize colours, typography, layout and styles. Built in TypeScript, Verso UI comes with its own type definitions to work in a variety of scalable applications and libraries.

## Get Started

```bash
  npm i verso-ui
```

```jsx
import { Text } from 'verso-ui'

//  Verso UI will ask for custom values required to render
export default (props) => (
  <Text></Text> //Type '{ children: string; }' is missing the following properties from type 'TextProps': fontWeight, fontSize, element
)

export default (props) => (
  <Text fontWeight="light" fontSize="medium" element="p">
    {props.children}
  </Text>
)
```

### Supported Components

Here's a list of components available from Verso UI:

<details>
<summary>Atoms</summary>
<br>
<ul>
  <li>PrimaryButton</li>
  <li>SecondaryButton</li>
  <li>TertiaryButton</li>
  <li>TextInput</li>
  <li>TextArea</li>
  <li>Heading</li>
  <li>Text</li>
</ul>
</details>

<details>
<summary>Molecules</summary>
<br>
<ul>
  <li>ContactForm</li>
  <li>Nav</li>
</ul>
</details>

<h2 style="text-align: center">Jump To:</h3>
<h3 style="text-align: center">Raise an Issue</h3>
<h3 style="text-align: center">Run Locally</h3>

## Raise an issue.

### Defects / Bugs

If you have been using Verso UI in one of your own projects and would like to draw attention to a bug or a defect, please select the projects **Bug / Defect** saved reply. Please provide as much detailed information as possible, including a description of the problem, reporduction steps and acceptance criteria for any future Pull Request related to this issue.

## Developing Verso UI Locally

If you have been using Verso UI and there's a feature you would like to see in this library, please select the projects **Task / Epic** saved reply. Please provide as much detailed information as possible about what you would like to see. Please provide a description of the feature and its purpose and an acceptance criteria for any future Pull Request related to this request.

### Set up in isolation

To start your development environment for Verso UI, run:

1. npm run dev
2. npm run storybook

This will start of the project in webpacks development mode, where the local build is updates as you update the code. Storybook will also start up on `localhost:6006` so that you can work on the components in an isolated environment.

### Set up within another application

To get started with Verso UI and develop components in the context of a consuming application (as opposed to Storybooks isolated setup), run:

**/Verso-UI**

- `npm link`
- `npm run dev`

**/consumingApp**

- `npm link verso-ui`

Verso UI requires a copy of React and React-Dom as devDependencies so that [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) can run locally and also within the projects CI pipeline as Pull Requests occur and also so that React components can render.

#### Invalid Hook Call Warning

If you receive this error, it's because two version's of React are present. To fix this you need to make sure that Verso UI and the consuming project are both using the same version of React. You have a couple of options to get this working, depending on your projects setup.

- Resolve your module aliases with Webpack in your consuming application by adding the following to your webpack config:
  ```js
    //  In webpack.config.js
      resolve: {
        alias: {
          react: path.resolve('node_modules/react'),
          'react-dom': path.resolve('node_modules/react'),
        },
      },
  ```
- Link your local running Verso UI library to your consumers version of react by running `npm link path/to/consumer/node_modules/react`.

> ℹ️ [See React's official docs on this problem for more information.](https://reactjs.org/warnings/invalid-hook-call-warning.html)
