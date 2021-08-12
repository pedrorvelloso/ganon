import nodePlop, { ActionType } from 'node-plop'

const plop = nodePlop('templates/index.hbs')

interface Answers {
  name: string
  description: string
}

const create = async () => {
  plop.setGenerator('package', {
    description: 'Generate new package',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name of package (component/hook): ',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description of package (component/hook): ',
      },
    ],
    actions(answers: unknown) {
      const actions: ActionType[] = []

      if (!answers) return actions

      const { description, name } = answers as Answers

      actions.push({
        type: 'addMany',
        templateFiles: 'component/**',
        destination: `../packages/{{name}}`,
        base: 'component/',
        data: { description, name },
        abortOnFail: true,
      })

      return actions
    },
  })

  const { runPrompts, runActions } = plop.getGenerator('package')

  const answers = await runPrompts()
  await runActions(answers)
}

create()
