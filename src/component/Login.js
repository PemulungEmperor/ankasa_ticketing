import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Banner from "./Banner";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { startGet, successGet, errorGet } from "../redux/reducer/userSlicer";
import { useDispatch } from "react-redux";
import ankasa_api from "../backend";

const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = `Ankasa - Login`;
  }, []);

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const loginData = {
      username: username,
      password: password,
    };

    startGet();

    axios
      .post(`${ankasa_api}/login`, loginData)
      .then((response) => {
        Swal.fire("Sign In", "Success", "success");
        console.log(response.data);

        // save token in local storage
        localStorage.setItem("token", response.data.token);
        dispatch(successGet(response.data));

        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email or password is incorrect",
        });
        console.error(error);
        errorGet();
      });
  };

  return (
    <>
      <div className="flex h-screen font-poppins">
        <Banner />
        <div className="w-[320px] sm:ml-[160px]">
          <div className="container right-content">
            <div className="flex mt-4 w-100">
              <img src="/img/assyifa/icon.png" alt="icon" />
              <h3 className="auth-title">Ankasa</h3>
            </div>

            {/* form login */}
            <div className="auth-content">
              <form onSubmit={handleLogin}>
                <h2 className="mb-4 auth-header">Login</h2>
                <div>
                  <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <input type={passwordVisibility ? "text" : "password"} name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <div className="p-viewer">
                  {passwordVisibility ? (
                    <i
                      className="fa-solid fa-eye"
                      onClick={() => {
                        setPasswordVisibility(!passwordVisibility);
                      }}
                    ></i>
                  ) : (
                    <i
                      className="fa-solid fa-eye-slash"
                      onClick={() => {
                        setPasswordVisibility(!passwordVisibility);
                      }}
                    ></i>
                  )}
                </div>
                <button type="submit" className="btn-auth bg-[#2395FF]">
                  Sign In
                </button>
              </form>
            </div>
            {/* akhir form login */}

            <p className="small mt-3 mb-3 text-center">
              Did you forgot your password? <br />
              <Link to="/forgot-password">Tap here for reset</Link>
            </p>
            <div className="auth-separator"></div>
            <p className="small text-center mb-2">or sign in with</p>
            <div className="another-login">
              <button type="button" className="btn-social-media flex justify-center items-center">
                <img src="/img/assyifa/google.png" alt="Google" />
              </button>
              <button type="button" className="btn-social-media flex justify-center items-center">
                <img src="/img/assyifa/facebook.png" alt="Facebook " />
              </button>
            </div>
            <p className="small text-center">
              Don&apos;t have an account? <Link to="/register">Sign up Here</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
