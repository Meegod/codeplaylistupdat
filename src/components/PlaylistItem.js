import React from 'react';

function PlaylistItem({ list }) {
  console.log(list);
  return (
    <div>
      {list.map((book, index) => (
        <div className="card pb-2 mb-4 d-flex ml-2 p-4 m-4" key={index}>
          <h2>Title:{book.title}</h2>
          <span>
            <b>Artiste</b>:{book.artist}
          </span>
          <p>
            <b>Notes</b>:{book.notes}
          </p>
        </div>
      ))}
    </div>
  );
}

export default PlaylistItem;
