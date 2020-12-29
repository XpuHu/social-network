import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import App from './App';

const rerender = (store, state) => {
   ReactDOM.render(
      <React.StrictMode>
         <App state={state} dispatch={store.dispatch.bind(store)} />
      </React.StrictMode>,
      document.getElementById('root')
   );
};

rerender(store, store.getState());

store.subscribe( () => {
   rerender(store, store.getState());
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
