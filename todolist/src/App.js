import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom' 
import { Provider } from 'react-redux';
import Header from './common/header/index.js';
import store from './store/index';
import Home from './page/home/index'
import Detail from './page/detail/index.js'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <BrowserRouter>
          <div>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </div>
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}

export default App