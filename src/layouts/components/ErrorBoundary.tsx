import React from 'react';

export default class ErrorBoundary extends React.Component<any, any> {
  public static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  constructor(props: any) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log('error path', this.props.location.pathname);
    // You can also log the error to an error reporting service
    console.log('error', error);
    console.log('errorInfo', errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <div>ohooos, there are some problem!</div>;
    } else {
      return <div>{children}</div>;
    }
  }
}
