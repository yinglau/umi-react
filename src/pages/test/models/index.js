export default {
  namespace: 'TEST',
  state: {
    default: 'hello'
  },
  effects: {
    *testAction(_, $) {
      console.log('_', _)
      console.log('$', $)
      yield $.put({ type: 'test', payLoad: 'haha' })
    },
    *testAction2(_, $) {
      console.log('_', _)
      console.log('$', $)
      yield $.put({ type: 'test', payLoad: 'haha' })
    }
  },
  reducers: {
    test: (state, payLoad) => {
      console.log('state', state)
      console.log('payLoad', payLoad)
      return state
    }
  }
}