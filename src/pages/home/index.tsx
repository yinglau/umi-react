import React from 'react'
import { Link } from 'umi'
import { TestState } from './models/types'

import { connect } from 'dva'
import Test from './components/test'

// export default connect((state: TestState) => state)((props: any) => {

//   console.log(props)

//   return (
//     <div>
//       <h1 className={styles.title}>Page index</h1>
//       <Button>asdfasdf</Button>
//     </div>
//   );
// })

@connect((state: TestState) => state)

class Index extends React.Component<TestState> {
  // constructor(props: IProps & TestState) {
  //   super(props)
  // }

  componentDidMount() {
    // axios('http://172.16.24.170:8900/api/b2b/goods/pageGoodsForList1', {
    //   method: 'GET'
    // }).then((res: any) => res.json()).then(data => data).catch((err: Error) => {
    //   Sentry.captureException(err)
    // })
    // const { dispatch } = this.props;

    // dispatch({
    //   type: 'HOME/testAction',
    //   payLoad: 'asdf'
    // }).then((res: any) => {
    //   // console.log(res)
    // })

  }

  render() {
    return (
      <div>
        <Link to='/' >index</Link>
        <Link to='/test222' >test</Link>
        <Test />
        hello!
      </div>
    )
  }
}

export default Index

// import React from 'react'
// import Page from './_dynamic'

// export default () => {
//   return <Page />
// }
