import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LikeButton from './components/like.js';
import TaskList from './components/operate_task'
import Navigation from './components/navigation'
import Platforms from './components/platforms'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation />
    <TaskList />
    <hr />
    <Platforms />
  </React.StrictMode>
);
reportWebVitals();
