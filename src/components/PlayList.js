import React, { Component } from 'react';
import PlayListItem from './PlayListItem'

export default class PlayList extends Component {
    constructor(props) {
      super(props)
      this.state = {
        songs: []
      }
    }
    componentDidMount() {
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
            return results.json();
          }).then(data => {
            this.setState({songs: data});
            console.log("state", this.state.songs);
          })
    }
    fetchData = (e) => {
        e.preventDefault();
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
          return results.json();
        }).then(data => {
          this.setState({songs: data});
        })
      }
    render() {
    return (
      <div className="playlist">
        <button onClick={this.fetchData} type="submit">Update</button>
        <PlayListItem songs={this.state.songs}/>
      </div>
    );
  }
}
