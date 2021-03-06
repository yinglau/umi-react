export default {
  namespace: 'TEST',
  state: {
    default: 'hello',
  },
  effects: {
    *testAction(_: any, $: any) {
      console.log('_', _);
      console.log('$', $);
      yield $.put({ type: 'test', payLoad: 'haha' });
    },
    *testAction2(_: any, $: any) {
      console.log('_', _);
      console.log('$', $);
      yield $.put({ type: 'test', payLoad: 'haha' });
    },
  },
  reducers: {
    test: (state: any, payLoad: any) => {
      console.log('state', state);
      console.log('payLoad', payLoad);
      return state;
    },
  },
};
