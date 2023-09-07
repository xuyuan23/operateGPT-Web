import React, { useState, useEffect } from 'react';
import MarkdownEditor from 'react-markdown-editor-lite';
import ReactMarkdown from 'react-markdown';

import 'react-markdown-editor-lite/lib/index.css';

const MarkdownEditorComponent = ({ markdown }) => {
  const [editorMarkdown, setEditorMarkdown] = useState(markdown)
  useEffect(() => {
    setEditorMarkdown(markdown)
  }, [markdown])

  const handleEditorChange = ({ text }) => {
    setEditorMarkdown(text);
  };

  return (
    <div>
      <div style={{ height: '10em', lineHeight: '1.5em', overflow: 'auto'}}>
        <MarkdownEditor value={editorMarkdown} onChange={handleEditorChange} nodeMdText={true} nodeMdPreview={false} renderHTML={(text) => <div dangerouslySetInnerHTML={{ __html: text }} />}/>
      </div>
      <div>
        <h2>Preview:</h2>
        <hr />
        <ReactMarkdown>{editorMarkdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditorComponent;
