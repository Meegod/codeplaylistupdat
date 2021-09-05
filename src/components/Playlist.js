import React, { useState } from 'react';
import PlaylistItem from './PlaylistItem';

function Playlist({ list }) {
  return (
    <div className="col-md-6 mx-auto mb-3 pb-3">
      <PlaylistItem list={list} />
    </div>
  );
}
export default Playlist;