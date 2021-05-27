import PropTypes from 'prop-types';
import React from 'react';
import UserRow from './UserRow';

export default class List extends React.Component {
  static propTypes = {
    users: PropTypes.array.isRequired
  };

  render() {
    return (
      <div>
        {
          this.props.users.map((user) => {
            return <UserRow user={user} key={user.id} />
          })
        }
      </div>

    );
  }
}
