import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TaskList from './components/operate_task'
import Navigation from './components/navigation'
import Platforms from './components/platforms'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation />
    <TaskList />
    <Platforms />
  </React.StrictMode>
);
reportWebVitals();
