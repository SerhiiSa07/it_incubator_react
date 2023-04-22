import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Serg', likesCount:'0' },
    {id: 2, message: 'Lex', likesCount:'23'}
]
let dialogs = [
    {id: 1, name: 'Serg'},
    {id: 2, name: 'Lex'},
    {id: 3, name: 'Maks'},
    {id: 4, name: 'Mark'},
    {id: 5, name: 'Lena'}
]
let messages = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'I am perfectly'},
    {id: 4, message: 'Yes'},
    {id: 5, message: 'Yes'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
