import React from 'react';
import { Link } from 'umi';
import { ITestState } from './models/types';

import { connect } from 'dva';
import Test from './components/test';

@connect((state: ITestState) => state)
class Index extends React.Component<ITestState> {
  // constructor(props: IProps & TestState) {
  //   super(props)
  // }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Link to="/">index</Link>
        <Link to="/test222">test</Link>
        hello!
      </div>
    );
  }
}

export default Index;

// import React from 'react'
// import Page from './_dynamic'

// export default () => {
//   return <Page />
// }
