import React, { useState, useReducer, useEffect } from 'react';
// ================= 普通 start
class MyCount extends React.Component {
  state = {
    count: 1
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  }
  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
      </>
    );
  }
}
// ================= 普通 end

// ==============useState start
// function MyCountFun() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount(c => c + 1);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);
//   return <h1>{count}</h1>;
// }
// ==============useState end
// ===========useReducer start
// 首先定义方法
// function reducerCount(state, action) {
//   switch (action.type) {
//     case 'add':
//       return state + 1;
//     case 'minus':
//       return state - 1;
//     default:
//       return state;
//   }
// }
// function MyCountFun() {
//   const [count, dispatchCount] = useReducer(reducerCount, 0);
//   const [name,setName] = useState('Yang')
//   useEffect(() => {
//     const interval = setInterval(() => {
//       dispatchCount({ type: 'minus' });
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);
//   return <h1>{count}</h1>;
// }

function reducerCount(state, action) {
  switch (action.type) {
    case 'add':
      return state + 1;
    default:
      return state;
  }
}

function MyCountFun() {
  const [count, dispatchCount] = useReducer(reducerCount, 0);
  const [name, setName] = useState('Yang');
  useEffect(() => {
    console.log('effect invoked');
    return () => console.log('effect deteched');
  }, []);
  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={()=>dispatchCount({ type: 'add' })}>{count}</button>
    </>
  );
}
// ===========useReducer end
export default MyCountFun;
