import React from 'react';
import ReactDOM from 'react-dom';
import AppItem from './App';
import {Provider} from 'react-redux'
import {GlobalStyle} from './style'
import {IconfontStyle} from './statics/iconfont/iconfont'
import store from './store'
const App = (
  <Provider store={store}>
    <GlobalStyle />
    <IconfontStyle />
    <AppItem />
  </Provider>
)
ReactDOM.render(App, document.getElementById('root'));