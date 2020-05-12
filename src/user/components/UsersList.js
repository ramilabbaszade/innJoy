import React from "react";
import UserItem from "./UserItem";

import "./UsersList.scss";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className='center'>
        <h3>Users not found</h3>
      </div>
    );
  }

  return (
    <section className="user-container">
      <h1>Admins list</h1>
      <ul className='user-list'>
        {props.items.map((user) => {
          return (
            <UserItem
              key={user.id}
              id={user.id}
              name={user.name}
              postCount={user.posts}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default UsersList;
