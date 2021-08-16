# Ganon

Design system for my personal speedrun websites.

## Quick start

Install Ganon and required dependencies
```sh
yarn add @ganon/core styled-components styled-system

# or

npm i @ganon/core styled-components styled-system
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
