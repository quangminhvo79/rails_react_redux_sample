import PropTypes from 'prop-types';
import React from 'react';

export default class UserRow extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  };

  onEdit() {
    alert('Edit')
  }

  onDelete() {
    alert('Edit')
  }

  updateHandle() {

  }

  render() {
    return (
      <div className="user-row">
        <div className="user-id"> id: {this.props.user.id} </div>
        <div className="user-name"> {this.props.user.name} </div>
        <div className="buttons">
          <button className="save" onClick={this.updateHandle}>Save</button>
          <button className="edit" onClick={this.onEdit}>Edit</button>
          <button className="delete" onClick={this.onDelete}>Delete</button>
        </div>
      </div>
    );
  }
}
