import React, { useState } from 'react';
import MarkdownEditor from 'react-markdown-editor-lite';
import ReactMarkdown from 'react-markdown';

import 'react-markdown-editor-lite/lib/index.css';

const MarkdownEditorComponent = ({ markdown }) => {
  console.log(markdown)
  const [editorMarkdown, setEditorMarkdown] = useState(markdown);
  console.log(editorMarkdown)

  const handleEditorChange = ({ text }) => {
    setEditorMarkdown(text);
  };

  return (
    <div>
      <MarkdownEditor value={editorMarkdown} onChange={handleEditorChange} renderHTML={(text) => <div dangerouslySetInnerHTML={{ __html: text }} />}/>
      <div>
        <h2>Preview:</h2>
        <ReactMarkdown>{editorMarkdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditorComponent;
