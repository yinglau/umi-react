import React from 'react'
import ErrorBoundary from './components'
// import ErrorBoundary from './components/ErrorBoundary'

type Props = {
  // children: () => void;
  history: object;
}

export default class Layout extends React.Component<Props> {

  componentDidMount() {
    console.log('global layout')
    window.onerror = (e) => {
      console.log('window catch err', e)
    }
  }

  render() {
    // console.log(this.props)
    return (
      <ErrorBoundary {...this.props}>
        <div>
          <div>header</div>
          <div>{this.props.children}</div>
          {/* <div>footer</div> */}
        </div>
      </ErrorBoundary>
    )
  }
}