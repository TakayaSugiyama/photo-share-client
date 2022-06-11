import React from "react";
import UserListItem from "../components/UserListItem";

const UserList = ({ count, users, refetchUsers }) => {
  return (
    <>
      <p>{count} users</p>
      <button onClick={() => refetchUsers()}>Refetch Users</button>
      <ul>
        {users.map((user) => (
          <UserListItem name={user.name} avatar={user.avatar} key={user.name} />
        ))}
      </ul>
    </>
  );
};

export default UserList;
