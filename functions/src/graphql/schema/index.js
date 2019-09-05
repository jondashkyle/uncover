import { queryType, stringArg } from 'nexus'

export * from './TransformImage'

export const Query = queryType({
  definition (t) {
    t.string('hello', {
      args: {
        name: stringArg({
          nullable: true
        })
      },
      resolve: (parent, {
        name
      }) => `Hello ${name || 'World'}!`
    })
  }
})
