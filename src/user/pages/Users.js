import React from "react";
import UsersList from "../components/UsersList";

const Users = (props) => {
  const USERS = [
    { id: "u1", name: "Ramil Abbaszade", posts: 5 },
    { id: "u2", name: "Ramil Abbaszade", posts: 25 },
    { id: "u3", name: "Ramil Abbaszade", posts: 5 },
    { id: "u4", name: "Ramil Abbaszade", posts: 8 },
    { id: "u5", name: "Ramil Abbaszade", posts: 16 }
  ];

  return <UsersList items={USERS} />
};

export default Users;
