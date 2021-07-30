import React, { Component } from 'react'
import './Mole.css'
import MoleIcon from './Mole.svg'

class Mole extends Component {
  render() {
    console.log("Test $#####$")
    console.log(this.props)
    return (
      <div className="den">
        { this.props.isMoleVisible && <img src={MoleIcon} className="Mole" alt="Mole" onClick={this.props.onMoleWhacked}/> }
      </div>
    )
  }
}

export default Mole
