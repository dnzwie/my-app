import React from "react";

const UserList = ({ users }) => {
  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id} className="user-item">
          {user.name}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
