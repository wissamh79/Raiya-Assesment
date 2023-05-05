import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context";
const RedirectPage = () => {
  const { dispatch } = useApp();
  const navigate = useNavigate();

  useEffect(() => {
    const setUser = async () => {
      await dispatch({
        type: "INIT",
        data: {
          email: "user7@gmail.com",
          password: "User@1234@User",
        },
      });
    };
    setUser();
    const timer = setTimeout(() => {
      navigate("/");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <span className="loader"></span>
    </div>
  );
};

export default RedirectPage;
