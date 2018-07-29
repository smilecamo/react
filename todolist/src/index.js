import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './store/index'
// Provider 里面的标签都可以使用store数据  store={store} 负责连接数据
// 组件下使用 connect接受数据
const View = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(View, document.getElementById('root'));