# Ganon

Design system for my personal speedrun websites.

## Quick start

Install Ganon and required dependencies
```sh
yarn add @ganon/core styled-components styled-system

# or

npm i @ganon/core styled-components styled-system
```

### Typescript

Install types from styled-components and styled-system

```sh
yarn add @types/styled-system @types/styled-components -D

# or

npm i @types/styled-system @types/styled-components --save-dev
```

## Usage

Wrap your component using `GanonProvider`

```js
import { GanonProvider } from '@ganon/core'

const App = ({ children }) => {
  return <GanonProvider>{children}</GanonProvider>
}
```

Then start using components!

```js
import { Button } from '@ganon/core'

export default function Home() {
  return (
    <div>
      Important content here!
      <Button variant="primary">Button</Button>
    </div>
  )
}
```

## Usage with Next

The project is build with styled-components! You need to set it up correctly with Next. Follow [this page](https://styled-components.com/docs/advanced#nextjs) to set it up.

### Inspiration
This lib was inspired by [chakra-ui](https://github.com/chakra-ui/chakra-ui) repo. If you want cool components go use them!
