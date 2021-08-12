import { GanonProvider } from '@ganon/core'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withGanon = (StoryFn: Function) => (
  <GanonProvider>
    <StoryFn />
  </GanonProvider>
)

export const decorators = [withGanon]
