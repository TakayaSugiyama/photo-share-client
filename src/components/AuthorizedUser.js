import React, { useState, useEffect } from "react";
import { withRouter } from "../hooks/withRouter";
import { useNavigate } from "react-router-dom";
import { githubAuth } from "../mutation/";
import { useMutation } from "@apollo/client";
import Me from "../components/Me";

const AuthorizedUser = (props) => {
  const [signingIn, setSigningIn] = useState(false);
  const navigate = useNavigate();

  const [handleLoginMutation, { data, loading, error }] = useMutation(
    githubAuth,
    {
      update(cache, { data }) {
        localStorage.setItem("token", data.githubAuth.token);
        navigate("/", { replace: true });
        setSigningIn(false);
        window.location.reload();
      },
    }
  );

  useEffect(() => {
    if (window.location.search.match(/code=/)) {
      setSigningIn(true);
      const code = window.location.search.replace("?code=", "");
      navigate("/", { replace: true });
      handleLoginMutation({
        variables: {
          code: code,
        },
      });
    }
  }, []);

  const requestCode = () => {
    const clientID = process.env.REACT_APP_CLIENT_ID;
    window.location = `https://github.com/login/oauth/authorize?client_id=${clientID}&scope=user`;
  };

  return (
    <Me
      logout={() => {
        localStorage.removeItem("token");
        window.location.reload();
      }}
      requestCode={requestCode}
      signingIn={signingIn}
    />
  );
};

export default withRouter(AuthorizedUser);
