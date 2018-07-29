import React, { Component } from 'react';
import Header from './common/header/index.js';
import { Provider } from 'react-redux';
import store from './store/index';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
        </div>
      </Provider>
    )
  }
}

export default App