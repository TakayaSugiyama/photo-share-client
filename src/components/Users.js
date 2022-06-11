import React from "react";
import { useQuery } from "@apollo/client";
import { allUsers } from "../query";
import UserList from "../components/UserList";

const Users = () => {
  const { loading, error, data, refetch } = useQuery(allUsers);
  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;
  return (
    <UserList
      count={data.totalUsers}
      users={data.allUsers}
      refetchUsers={refetch}
    />
  );
};

export default Users;
