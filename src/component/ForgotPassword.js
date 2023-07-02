import "../style/auth.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";
// import Icon from '../assets/images/icon.png';

const Register = () => {
  useEffect(() => {
    document.title = `Ankasa - Register`;
  }, []);

  const [passwordVisibility, setPasswordVisibility] = useState(false);

  return (
    <>
      <div className="container-fluid ff-poppins">
        <div className="row">
          <Banner />
          <div className="right-side col-sm-6">
            <div className="container right-content">
              <div className="d-flex mt-4 w-100 auth-logo">
                <img src="/img/assyifa/icon.png" alt="icon" />
                <h3 className="auth-title">Ankasa</h3>
              </div>
              <div className="auth-content">
                <form>
                  <h2 className="mb-4 auth-header">Register</h2>
                  <input type="text" name="name" placeholder="Name" required />
                  {/* <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    required
                  /> */}
                  <input type="text" name="email" placeholder="Email" required />
                  <input type={passwordVisibility ? "text" : "password"} name="password" placeholder="Password" required />
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
                  <button type="submit" className="btn-auth">
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
      </div>
    </>
  );
};

export default Register;
