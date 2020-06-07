import React from 'react';
import AppRouting from './navigation/AppRouting';

import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
          <AppRouting/>
      </div>
    );
  }
}

export default App;
