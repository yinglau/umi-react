import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
// import ErrorBoundary from './components/ErrorBoundary'

type Props = {
  // children: () => void;
  history: object;
};

export default class Layout extends React.Component<Props> {
  render() {
    // console.log(this.props)
    return <ErrorBoundary {...this.props}>{this.props.children}</ErrorBoundary>;
  }
}
