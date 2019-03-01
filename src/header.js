import React from 'react'
import Button from './Button.js'


class Header extends React.Component {
  state = {
    hello: 'mike'
  }
  alertCall(){
    alert('Hello')
  }
  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <Button clickHandler={this.alertCall} text="POPUP"/>
        {this.state.hello}
      </div>
    )
  }
}

export default Header;
