import React, { Component } from 'react';
import Category from './category';
import Product from './product';

class Body extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: 'all'
    }
  }

  render() {

    return(
      <div>

        <Category onCategory={(category) => {
          this.setState({ category })
        }} />
        <center>
          <Product category={this.state.category} />
        </center>
      </div>
    )
  }



}

export default Body;
