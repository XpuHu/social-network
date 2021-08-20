import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import App from './App';
import { Provider } from "react-redux";

const rerender = (store) => {
   ReactDOM.render(
      <Provider store={ store }>
         <App />
      </Provider>,
      document.getElementById('root')
   );
};

rerender(store);

store.subscribe(() => {
   rerender(store);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
