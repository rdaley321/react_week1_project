import React, { Component } from 'react';

export default class PlayListItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="all-songs">
        {this.props.songs.map((song) =>
        <div className= "song"key={song._id}>
          <p><span className="category">User: </span>{song.userName}</p>
          <hr></hr>
          <p><span className="category">Artist/Band: </span>{song.songArtist}</p>
          <hr></hr>
          <p><span className="category">Title: </span>{song.songTitle}</p>
          <hr></hr>
          <p><span className="category">Notes: </span>{song.songNotes}</p>
        </div>
        )}
      </div>
    )
  }
}
