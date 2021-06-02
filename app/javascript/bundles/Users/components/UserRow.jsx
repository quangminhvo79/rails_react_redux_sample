import PropTypes from 'prop-types';
import React from 'react';
import UserForm from './UserForm';

export default class UserRow extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props)
    this.state = { isEdit: false };
  }

  onEdit() {
    this.setState({
      isEdit: !this.state.isEdit
    })
  }

  onDelete() {
    this.setState({
      isEdit: !this.state.isEdit
    })
  }

  renderRow() {
    if (this.state.isEdit)
      return (<UserForm user={this.props.user}/>)
    else
      return this.row()
  }

  row(){
    return (
      <div>
        <div className="user-first-name"> First Name: {this.props.user.first_name} </div>
        <div className="user-last-name"> Last Name: {this.props.user.last_name} </div>
        <div className="user-email-name"> Email: {this.props.user.email} </div>
      </div>
    )
  }

  editButton(){
    if (!this.state.isEdit)
      return (<button className="edit" onClick={this.onEdit.bind(this)}>Edit</button>)
  }

  render() {

    return (
      <div className="user-row">
        {this.renderRow()}
        <div className="buttons">
          {this.editButton()}
          <button className="delete" onClick={this.onDelete.bind(this)}>Delete</button>
        </div>
      </div>
    );
  }
}
