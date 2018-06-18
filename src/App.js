import React from 'react';
import AppRouter from './routers/AppRouter'

// Import stylesheets
import './index.css';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <AppRouter />
    );
  }
}

export default App;