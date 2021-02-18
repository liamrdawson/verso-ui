# Verso UI

**Verso UI is a library for creating themable user interfaces based on atomic design principles.**

Built for image oriented websites and applications, where you can pass in custom tokens and themes to customize colours, typography, layout and styles. Built in TypeScript, Verso UI comes with its own type definitions and is intended to work in a variety of scalable applications and libraryies.

## Get Started

```bash
  npm i verso-ui
```

```jsx
import { Text } from 'verso-ui'

//  Verso UI will ask for custom values required to render successfully
export default (props) => (
  <Text></Text> //Type '{ children: string; }' is missing the following properties from type 'TextProps': fontWeight, fontSize, element
)

export default (props) => (
  <Text fontWeight="light" fontSize="medium" element="p">
    {props.children}
  </Text>
)
```

## Supported Components

Here's a list of components currently available from Verso UI:

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
