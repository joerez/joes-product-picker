import React, { Component } from 'react';

class myComponent extends Component {
  constructor(props) {
    super(props)



  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

export default myComponent
