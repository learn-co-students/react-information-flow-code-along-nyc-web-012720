import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor()
    }
  }

  handleClickColor = () => {
    this.setState({color: getRandomColor()})
  }

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child handleClickColor={this.handleClickColor}/>
        <Child handleClickColor={this.handleClickColor}/>
      </div>
    )
  }
}

export default Parent
