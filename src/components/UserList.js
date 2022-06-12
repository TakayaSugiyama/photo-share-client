import React from "react";
import UserListItem from "../components/UserListItem";
import { useMutation } from "@apollo/client";
import { addFakeUsers } from "../mutation";
import { allUsers } from "../query";

const UserList = ({ count, users, refetchUsers }) => {
  const [handleCreateUsers, data] = useMutation(addFakeUsers, {
    variables: { count: 1 },
    update: (cache, { data: { addFakeUsers } }) => {
      const cacheData = cache.readQuery({
        query: allUsers,
      });
      cache.writeQuery({
        query: allUsers,
        data: {
          allUsers: cacheData.allUsers.concat(addFakeUsers),
          me: cacheData.me,
          totalUsers: cacheData.totalUsers + addFakeUsers.length,
        },
      });
    },
  });
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
