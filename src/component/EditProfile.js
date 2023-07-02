import React, { useState } from "react";
import Profile from "./Profile";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateCredentials } from "../redux/reducer/userSlicer";
import ankasa_api from "../backend";

const EditProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [postCode, setPostCode] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    const userData = {
      username,
      email,
      phone_number: phoneNumber,
      city,
      address,
      post_code: postCode,
    };

    axios
      .put(`${ankasa_api}/update/profile/` + id, userData)
      .then((response) => {
        dispatch(updateCredentials(response.data.username));
        Swal.fire("Update Data", "Success", "success");
        alert("Success, Please relogin if data not updated!");
        navigate("/");
      })

      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something Wrong!",
        });
        console.error(error);
      });
  };

  return (
    <div style={{ backgroundColor: "#f5f6fa" }}>
      <div className="container mt-2 mb-2 p-4">
        <div className="row">
          <Profile />
          {/* Right Component */}
          <div className="col-md-8 m-3">
            <div className="edit-profile">
              <div className="row bg-white rounded-3 p-3">
                <p className="text-primary fw-bold">Profile</p>
                <div className="row mt-2">
                  <h4 className="col fw-bold mb-3" style={{ fontSize: "20px" }}>
                    Profile
                  </h4>
                </div>
                <form onSubmit={handleForm}>
                  <div className="row">
                    <div className="col-md-6">
                      <h6 className="fw-bold mb-1">Contact</h6>
                      <div>
                        <label className="text-muted">Email</label>
                        <input className="form-control mb-4" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                      </div>
                      <div>
                        <label className="text-muted">Phone Number</label>
                        <div>
                          <input className="form-control mb-4" type="text" value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} required />
                        </div>
                      </div>
                      <div className="text-end">
                        <h6 className="fw-bold text-primary">
                          Account Settings
                          <i className="fa-solid fa-chevron-right text-primary ms-3" />
                        </h6>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h6 className="fw-bold mb-1">Biodata</h6>
                      <div>
                        <label className="text-muted">Username</label>
                        <div>
                          <input className="form-control mb-4" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </div>
                      </div>
                      <div>
                        <label className="text-muted">City</label>
                        <input className="form-control mb-4" type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
                      </div>
                      <div>
                        <label className="text-muted">Address</label>
                        <input className="form-control mb-4" type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
                      </div>
                      <div>
                        <label className="text-muted">Post Code</label>
                        <input className="form-control mb-4" type="text" value={postCode} onChange={(e) => setPostCode(e.target.value)} required />
                      </div>
                    </div>
                  </div>
                  <div className="col-md text-end">
                    <button className="col-md-2 btn btn-md text-white fw-bold" style={{ backgroundColor: "#2395FF", boxShadow: "-0.1em 0.2em 1em #2395FF" }}>
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
