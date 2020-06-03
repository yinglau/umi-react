import React from 'react';
import { Link } from 'umi';
import { ITestState } from './models/types';

import { connect } from 'dva';

@connect(
  (state: any) => state.HOME,
  (dispatch: any) => {
    return {
      getAction: () => {
        dispatch({ type: 'HOME/testAction' });
      },
    };
  },
)
class Index extends React.Component<ITestState & { getAction: Function }> {
  // constructor(props: IProps & TestState) {
  //   super(props)
  // }

  componentDidMount() {
    console.log(this.props);
    this.props.getAction();
  }

  render() {
    return (
      <div>
        <Link to="/">index</Link>
        <Link to="/test222">test</Link>
        hello! {this.props.default}
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
