import React, { Component } from 'react';
import '../styles/App.css';
import NavBar from './NavBar'
import PlayListForm from './PlayListForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <PlayListForm />
      </div>
    );
  }
}

export default App;
