import React from 'react'

class Button extends React.Component {
  render(){
    const {clickHandler, text, id} = this.props;
    return(
      <div>
        <button id={id} onClick={clickHandler}>{text}</button>
      </div>
    )
  }
}

export default Button;
