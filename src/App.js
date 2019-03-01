import React, { Component, Fragment } from 'react';
import Header from './header.js'
import logo from './logo.svg';
import './App.css';
import Button from './Button.js'

class App extends Component {
  state = {
      description: 'Hello Sandra, I am the parent'
  }

  componentDidMount() {

  }

  render() {
    return (
      <Fragment className="App">
        <Header title="Hello world" description={this.state.description} />
        <Button clickHandler={() => console.log('click')} text={'Change the header'} />
      </Fragment>
    );
  }
}

export default App;
