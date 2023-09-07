import React, { useState } from 'react';
import MarkdownEditor from 'react-markdown-editor-lite';
import ReactMarkdown from 'react-markdown';

import 'react-markdown-editor-lite/lib/index.css';

const MarkdownEditorComponent = () => {
  const [markdown, setMarkdown] = useState('');

  const handleEditorChange = ({ text }) => {
    setMarkdown(text);
  };

  return (
    <div>
      <MarkdownEditor value={markdown} onChange={handleEditorChange} renderHTML={(text) => <div dangerouslySetInnerHTML={{ __html: text }} />} />
      <div>
        <h2>Preview:</h2>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditorComponent;
