import React, { useState } from 'react';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [titleInput, setTitle] = useState('');
  const [contentInput, setContent] = useState('');

  function handleTitle(e) {
    const newValue = e.target.value;
    setTitle(newValue);
  }

  function handleContent(e) {
    const newValue = e.target.value;
    setContent(newValue);
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form
        className="create-note"
        onSubmit={(e) => {
          e.preventDefault();
          props.onAddNote(titleInput, contentInput);
          setTitle('');
          setContent('');
        }}
      >
        {isExpanded && (
          <input
            onChange={handleTitle}
            value={titleInput}
            name="title"
            placeholder="Title"
            required
          />
        )}

        <textarea
          onClick={expand}
          onChange={handleContent}
          value={contentInput}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          required
        />
        <Zoom in={isExpanded ? true : false}>
          <Fab type="submit">
            <NoteAddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
