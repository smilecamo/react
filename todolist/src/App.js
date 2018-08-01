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
          <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
          </div>
          </BrowserRouter>
      </Provider>
    )
  }
}

export default App