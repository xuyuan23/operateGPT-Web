import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LikeButton from './components/like.js';
import CommElement from './components/common_list';
import TaskList from './components/operate_task'

const USERS = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' },
  { username: 'Lucy2', age: 20, gender: 'female' },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TaskList />
    <LikeButton />
  </React.StrictMode>
);
reportWebVitals();
