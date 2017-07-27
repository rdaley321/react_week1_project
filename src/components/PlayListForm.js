import React, { Component } from 'react';

export default class PlayListForm extends Component {
  constructor() {
    super()
    this.state ={
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: '',
      songs: []
    }
  }

  handleUserName = (e) => {
    e.preventDefault()
    this.setState({
      userName: e.target.value
    })
  }

  handleSongArtist = (e) => {
    e.preventDefault()
    this.setState({
      songArtist: e.target.value
    })
  }

  handleSongTitle = (e) => {
    e.preventDefault()
    this.setState({
      songTitle: e.target.value
    })
  }

  handleSongNotes = (e) => {
    e.preventDefault()
    this.setState({
      songNotes: e.target.value
    })
  }

  addToList = (e) => {
      e.preventDefault();
      function fetchData (){
          e.preventDefault();
          fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
            return results.json();
          }).then(data => {
            this.setState({songs: data});
          })
        }
      this.setState({
        userName: e.target.value,
        songTitle: e.target.value,
        songArtist: e.target.value,
        songNotes: e.target.value
      });
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");
    })
    // .then(fetchData)
    .catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }

  render() {
    return (
      <div className="playlist-form">
        <form>
          <input onChange={this.handleUserName}
            type="text"
            className="form-control"
            id="user"
            placeholder="Name or User Name"
            value={this.state.userName}/>
          <input onChange={this.handleSongArtist}
            type="text"
            className="form-control"
            id="artist"
            placeholder="Artist or Band Name"
            value={this.state.songArtist} />
          <input onChange={this.handleSongTitle}
            type="text"
            className="form-control"
            id="title"
            placeholder="Song Title"
            value={this.state.songTitle} />
          <input onChange={this.handleSongNotes}
            type="text"
            className="form-control"
            id="notes"
            placeholder="Notes"
            value={this.state.songNotes} />
          <button onClick={this.addToList} type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
