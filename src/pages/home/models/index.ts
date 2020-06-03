import * as services from '../services';
import { delay } from '@/utils/fetch';
import { EffectsCommandMap } from 'dva';
import { AnyAction } from 'redux';

export default {
  namespace: 'HOME',
  state: {
    listData: [],
  },
  effects: {
    *testAction(_: AnyAction, $: EffectsCommandMap) {
      // console.log('_', _)
      // console.log('$', $)
      const resData: IResData = yield $.call(services.getList);
      yield delay(3000);
      yield $.put({ type: 'test', payLoad: resData });
      // return 'hahah'
    },
  },
  reducers: {
    test: (state: any, action: AnyAction) => {
      // console.log('state', state)
      // console.log('payLoad', payLoad)
      return {
        ...state,
        listData: action.payLoad,
      };
    },
  },
};
