import React, { useEffect, useState } from 'react';
import MarkdownEditorComponent from './MarkdownEditor';
import './operate_task_style.css';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newPrompt, setNewPrompt] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [fileContent, setFileContent] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://43.156.9.162:8671/api/operate/task/list?user_id=1001');
      const data = await response.json();
      setTasks(data.data);
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
    }
  };

  const handleCreateTask = async () => {
    const url = `http://43.156.9.162:8671/api/operate/task/create?user_id=1001&prompt=${encodeURIComponent(newPrompt)}&lang=${encodeURIComponent(selectedLanguage)}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (data.success) {
        console.log('Task created successfully');
        fetchTasks();
      } else {
        console.error('Failed to create task:', data.msg);
      }
    } catch (error) {
      console.error('Failed to create task:', error);
    }
  };

  const handleDownload = async (url) => {
    try {
      const response = await fetch(url);
      const content = await response.text();
      setFileContent(content);
    } catch (error) {
      console.error('Failed to download file:', error);
    }
  };

  return (
    <div className="task-list-container">
      <h1>OperateGPT Experience</h1>

      <div className="create-task-container">
        <input
          type="text"
          value={newPrompt}
          onChange={(e) => setNewPrompt(e.target.value)}
          placeholder="Please input some ideas..."
        />
        <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="zh">中文</option>
        </select>
        <button onClick={handleCreateTask}>Create Task</button>
      </div>
      <br/>
      Task List:
      <hr />
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={`task-item ${task.status === 'running' ? 'running' : task.status === 'success' ? 'success' : task.status === 'failed' ? 'failed' : 'init'}`}>
            <div className="task-info">
              <div>Prompt: {task.prompt}</div>
              <div>CreateTime: {task.gmt_create}</div>
              <div>Status: {task.status}</div>
              {task.result && (
                <div>
                  Result: <a href={task.result} download onClick={(event) => {event.preventDefault(); handleDownload(task.result); }}>Download</a>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      <h2>File Content</h2>
      <MarkdownEditorComponent markdown={fileContent} />
    </div>
  );
}

export default TaskList;