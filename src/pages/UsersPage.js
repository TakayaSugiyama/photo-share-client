import React from "react";
import Users from "../components/Users";
import AuthorizedUser from "../components/AuthorizedUser";

const UsersPage = () => {
  return (
    <>
      <AuthorizedUser />
      <Users />
    </>
  );
};

export default UsersPage;
