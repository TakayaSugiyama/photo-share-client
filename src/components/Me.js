import React from "react";
import { useQuery } from "@apollo/client";
import { allUsers } from "../query";

const Me = ({ logout, requestCode, signingIn }) => {
  const { loading, error, data } = useQuery(allUsers);
  if (loading) return <p>loading...</p>;
  if (error) return <p>error</p>;
  if (!data.me)
    return (
      <button onClick={() => requestCode()} disabled={signingIn}>
        Sign In With GitHub
      </button>
    );
  return <CurrentUser {...data.me} logout={logout} />;
};

const CurrentUser = ({ name, avatar, logout }) => {
  return (
    <div>
      <img src={avatar} width={48} height={48} alt="" />
      <h1>{name}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Me;
