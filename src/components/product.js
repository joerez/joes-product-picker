import React, { Component } from 'react';
import inventory from '../inventory'

class product extends Component {
  constructor(props) {
    super(props)
    // props.category = 'category name' or 'all' <- default
  }

  render() {

    const items = inventory.filter((item, index) => {
      return item.category === this.props.category || this.props.category === 'all'
    }).map((item, index) => {
      // {name:"qqqq", price:0.0, category:'mmm'}
      return <div key={index} className="item"><h1>{item.name}</h1> <h3>{item.category}</h3> <h4>{item.price}</h4></div>
    })

    return (
      <div className="itemcont">
        {items}
      </div>
    )
  }
}



export default product
