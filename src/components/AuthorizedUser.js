import React, { useState, useEffect } from "react";
import { withRouter } from "../hooks/withRouter";
import { useNavigate } from "react-router-dom";

const AuthorizedUser = (props) => {
  const [signingIn, setSigningIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.search.match(/code=/)) {
      setSigningIn(true);
      const code = window.location.search.replace("?code=", "");
      alert(code);
      navigate("/", { replace: true });
    }
  }, []);

  const requestCode = () => {
    const clientID = process.env.REACT_APP_CLIENT_ID;
    window.location = `https://github.com/login/oauth/authorize?client_id=${clientID}&scope=user`;
  };

  return (
    <button onClick={() => requestCode()} disabled={signingIn}>
      Sign In With GitHub
    </button>
  );
};

export default withRouter(AuthorizedUser);
