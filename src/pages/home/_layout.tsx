import React from 'react'

export default class Layout extends React.Component {
  componentDidMount() {
    console.log('home/layout')
  }

  render() {
    return (
      <div>
        <div>home header</div>
        <div>{this.props.children}</div>
        <div>home footer</div>
      </div>
    )
  }
}