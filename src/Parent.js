import React, { Component, Children } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      childrenColor: '#FFF'
    }
  }

  changeColor = (newChildColor) => {
    this.setState({
      color: getRandomColor(),
      childrenColor: newChildColor
    })
  }

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child changeColor={this.changeColor} color={this.state.childrenColor}/>
        <Child changeColor={this.changeColor} color={this.state.childrenColor}/>
      </div>
    )
  }
}

export default Parent
