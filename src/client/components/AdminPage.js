import React from 'react';
import { Link } from 'react-router-dom';

class AdminPage extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>admin page</h1>
        <Link to="/adminpage/users">유저들입니다</Link>
      </div>
    )
  }
}

export default AdminPage;
