import React, { Dispatch, useMemo } from 'react'
import { Link } from 'umi'
import { ITestState } from './types'
import { connect } from 'dva'
import Test from './components/test'

@connect(
  (models: any): ITestState => ({
    HOME: models.HOME,
    loading: models.loading,
  }),
  (dispatch: Dispatch<{ type: string;[propName: string]: any }>) => {
    return {
      getAction: () => {
        dispatch({ type: 'HOME/testAction' })
      },
    };
  },
)
class Index extends React.Component<ITestState & { getAction: () => void }> {
  constructor(props: any) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props)
    this.props.getAction()
  }

  // renderList = (data: Array<any>) => {
  //   return data.map(item => <div>{item.name}</div>)
  // }

  render() {
    const { effects } = this.props.loading;
    const { listData } = this.props.HOME;

    return (
      <div>
        <Link to="/">index</Link>
        <Link to="/test222">test</Link>
        hello!
        <div>
          {effects['HOME/testAction'] ? (
            <div>Loading...</div>
          ) : (
              <Test data={listData} />
            )}
        </div>
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
