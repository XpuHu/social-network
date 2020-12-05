import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogs = [
  { id: 1, name: 'Dymich' },
  { id: 2, name: 'Viktor' },
  { id: 3, name: 'Sveta' },
  { id: 4, name: 'Andrey' },
  { id: 5, name: 'Slava' },
];

const messages = [
  { id: 1, message: 'Yo' },
  { id: 2, message: 'Hi' },
  { id: 3, message: 'How are you?' },
];

const posts = [
  { id: 1, message: 'Hey, how are you?', likesCount: 5 },
  { id: 2, message: `It's my first post!`, likesCount: 20 },
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
