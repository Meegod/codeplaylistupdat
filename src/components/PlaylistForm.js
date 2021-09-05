import React, { useState, useEffect } from 'react';

function PlaylistForm({ list, setList, addItem }) {
  //The state for your PlayListForm component should have
  //userName, songArtist, songTitle, and songNotes
  const [artist, setArtist] = useState('');
  const [notes, setNotes] = useState('');
  const [title, setTitle] = useState('');
  const [submitter, setSubmitteer] = useState('');

  // Fetching from Local Storage
  // const getTasks = JSON.parse(localStorage.getItem('songs'));

  function handleSubmit(e) {
    e.preventDefault();
    const todo = { artist, title, notes };
    console.log(todo);

    // setList(prevTodos => [...prevTodos, todo]);
    addItem(todo);
    setTitle('');
    setArtist('');
    setNotes('');
  }
  return (
    <div className="col-md-6 mx-auto mb-3 pb-3">
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            class="form-control"
            id="exampleInputText"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Artiste
          </label>
          <input
            type="text"
            onChange={e => setArtist(e.target.value)}
            value={artist}
            class="form-control"
            id="exampleInputArtiste"
            aria-describedby="emailHelp"
          />
        </div>

        <div class="mb-3">
          <label for="Artiste" class="form-label">
            Notes
          </label>
          <textarea
            class="form-control"
            value={notes}
            id="exampleFormControlTextarea3"
            onChange={e => setNotes(e.target.value)}
            rows="7"
          />
        </div>
        <button type="submit" class="btn btn-primary mx-auto d-block">
          Submit
        </button>
      </form>
    </div>
  );
}

export default PlaylistForm;
