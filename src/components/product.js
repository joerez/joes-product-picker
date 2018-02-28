import React, { Component } from 'react';
import inventory from '../inventory'


class product extends Component {
  constructor(props) {
    super(props)

  }



  render() {

    const items = inventory.map((item, index) => {
      return <div className="item"><h1>{item.name}</h1> <h3>{item.category}</h3> <h4>{item.price}</h4></div>
    })



    return (
      <div className="itemcont">
        {items}
      </div>
    )
  }
}



export default product
