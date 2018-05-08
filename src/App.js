import React, { Component } from 'react';
import Button from 'antd/lib/button';
import './App.css';
import IconClickCopy from './Component/copyToClipboard/IconClickCopy';

class App extends Component {
  render() {
    const text = '5453'
    return (
      <div className="App">
        <IconClickCopy content={text}/>
      </div>
    );
  }
}

export default App;
