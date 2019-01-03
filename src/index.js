import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import 'antd/dist/antd.css'
import store from './store'
import TodoList from './TodoList';
const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
)
ReactDOM.render(App, document.getElementById('root'));