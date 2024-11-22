import { MockMethod, MockConfig } from 'vite-plugin-mock'

export default [
  {
    url: '/api/test/hello',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 0,
        data: {
          message: 'hello world'
        },
        msg: 'ok'
      }
    }
  }
] as MockMethod[]
