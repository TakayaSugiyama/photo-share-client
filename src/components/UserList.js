import React from "react";
import UserListItem from "../components/UserListItem";
import { useMutation } from "@apollo/client";
import { addFakeUsers } from "../mutation";
import { allUsers } from "../query";

const UserList = ({ count, users, refetchUsers }) => {
  const [handleCreateUsers, { data, loading, error }] = useMutation(
    addFakeUsers,
    { refetchQueries: [allUsers], count: 1 }
  );
  return (
    <>
      <p>{count} users</p>
      <button onClick={() => refetchUsers()}>Refetch Users</button>
      <button onClick={() => handleCreateUsers()}>Add Fake Users</button>
      <ul>
        {users.map((user) => (
          <UserListItem name={user.name} avatar={user.avatar} key={user.name} />
        ))}
      </ul>
    </>
  );
};

export default UserList;
