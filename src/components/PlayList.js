import React, { Component } from 'react';
import PlayListItem from './PlayListItem'

export default class PlayList extends Component {
    constructor(props) {
      super(props)
    }
    handleFormUpdate = (e) => {
        e.preventDefault();
        this.props.handleUpdate()
      }
    render() {
    return (
      <div className="playlist">
        <button onClick={this.handleFormUpdate} type="submit">Update</button>
        <PlayListItem songs={this.props.songs}/>
      </div>
    );
  }
}
