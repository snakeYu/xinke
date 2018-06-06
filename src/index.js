import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import todoApp from './reducers';
// import App from './components/App.js';
import reducers from './reducers';
import App from './App';
import thunk from 'redux-thunk';

let store = createStore(reducers, applyMiddleware(thunk));
// 监听数据发生变化
// store.subscribe(() => console.log(store.getState()));

render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);
// //  +++++ 加入+++++
// if (module.hot) {
//   module.hot.accept();
// }
