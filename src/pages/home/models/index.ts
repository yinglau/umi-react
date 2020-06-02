export default {
  namespace: 'HOME',
  state: {
    default: 'hello',
  },
  effects: {
    *testAction(_: any, $: any) {
      // console.log('_', _)
      // console.log('$', $)
      yield $.put({ type: 'test', payLoad: 'haha' });
      // return 'hahah'
    },
    *testAction2(_: any, $: any) {
      // console.log('_', _)
      // console.log('$', $)
      yield $.put({ type: 'test', payLoad: 'haha' });
    },
  },
  reducers: {
    test: (state: any, payLoad: any) => {
      // console.log('state', state)
      // console.log('payLoad', payLoad)
      return state;
    },
  },
};
