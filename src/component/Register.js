import "../style/auth.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import axios from "axios";
import Swal from "sweetalert2";
import ankasa_api from "../backend";

const Register = () => {
  useEffect(() => {
    document.title = `Ankasa - Register`;
  }, []);

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const registerData = {
      username: username,
      password: password,
      email: email,
    };

    axios
      .post(`${ankasa_api}/register`, registerData)
      .then((response) => {
        Swal.fire("Register", "Success", "success");
        console.log(response.data);

        // save token in local storage

        navigate("/login");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email or password is incorrect",
        });
        console.error(error);
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

            {/* form register */}
            <div className="auth-content">
              <form onSubmit={handleRegister}>
                <h2 className="mb-4 auth-header">Register</h2>
                <input type="text" name="username" placeholder="Userame" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="text" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
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
                  Sign Up
                </button>
                <div className="d-flex align-items-center mt-3">
                  <input type="checkbox" id="terms" name="terms" required />
                  <label> Accept terms and condition</label>
                </div>
              </form>
            </div>
            <div className="auth-separator"></div>
            <p className="small text-center mb-3">Already have an account?</p>
            <Link to="/login">
              <button type="button" className="btn-auth-secondary">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
