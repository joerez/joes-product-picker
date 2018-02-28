import React, { Component } from 'react';
import inventory, { categories } from '../inventory';


class category extends Component {
  constructor(props) {
    super(props)


  }



  render() {

    const item = categories.map((item, index) => {
      return (
      <button className="catebtn">{item}</button>
    )
 })



    return (
      <div className="buttons">
        {item}
        <button className="catebtn">All</button>
      </div>
    )
  }
}



export default category
