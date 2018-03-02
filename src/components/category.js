import React, { Component } from 'react';
import inventory, { categories } from '../inventory';


class category extends Component {
  constructor(props) {
    super(props)

  }



  render() {
    const item = categories.map((item, index) => {
      return (
        <button key={index} className="catebtn" onClick={() => {
          this.props.onCategory(item)
        }}>{item}</button>
      )
 })



    return (
      <div className="buttons">
        {item}
        <button className="catebtn" onClick={() => {
          this.props.onCategory('all');
        }}>All</button>
      </div>
    )
  }
}



export default category
