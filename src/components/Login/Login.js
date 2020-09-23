import React, { useState } from "react";
import axios from "axios";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Login.module.css";
import { setUserSession } from "../../utilis/Common";

function Login(props) {
  const [loading, setLoading] = useState(false);
  const [isRevealPassword, setRevealPassword] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    password: "",
    email: "",
  });

  const togglePassword = () => {
    setRevealPassword(!isRevealPassword);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    axios
      .post("http://localhost:3333/login", data)
      .then((res) => {
        setLoading(false);
        setUserSession(res.data.accessToken);
        props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
        setError("Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="col-4 offset-4">
      <form onSubmit={handleSubmit}>
        <h3 style={{ textAlign: "center" }}>Login</h3>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type={isRevealPassword ? "text" : "password"}
            className="form-control"
            placeholder="Password"
            onChange={(e) => {
              setData({ ...data, password: e.target.value });
            }}
          />
          <span onClick={togglePassword}>
            {isRevealPassword ? (
              <span className={style.positionSpan}>
                <FontAwesomeIcon icon={faEye} />
              </span>
            ) : (
              <span className={style.positionSpan}>
                <FontAwesomeIcon icon={faEyeSlash} />
              </span>
            )}
          </span>
        </div>

        {error && (
          <>
            <small style={{ color: "red" }}>{error}</small>
            <br />
          </>
        )}
        <br />
        <button className="btn btn-success btn-block">
          {loading ? "Loading" : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
