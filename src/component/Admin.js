import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ankasa_api from "../backend";

const Admin = () => {
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState("");

  //form data
  const [airlines, setAirlines] = useState("");
  const [transit_type, setTransitType] = useState("");
  const [luggage, setLuggage] = useState(false);
  const [meal, setMeal] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [departure, setDeparture] = useState("");
  const [arrived, setArrived] = useState("");
  const [ticket_price, setTicketPrice] = useState();
  const [departure_date, setDepartureDate] = useState("");
  const [arrive_date, setArriveDate] = useState("");
  const [photoPath, setPhotoPath] = useState("");
  const [departure_city, setDepartureCity] = useState("");
  const [arrive_city, setArriveCity] = useState("");

  // redux
  const data = useSelector((state) => state.user.userCredentials);

  //photo preview
  const handleUploadChange = (e) => {
    let uploaded = e.target.files[0];
    if (e.target.files.length !== 0) {
      setPreviewImage(URL.createObjectURL(uploaded));
      setPhotoPath(uploaded);
    }
  };

  // logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    Swal.fire("Log out", "berhasil", "success");
    navigate("/login");
  };

  const addFlight = async () => {
    let formData = new FormData();
    formData.append("airlines", airlines);
    formData.append("transit_type", transit_type);
    formData.append("luggage", true);
    formData.append("meal", true);
    formData.append("wifi", false);
    formData.append("departure", departure);
    formData.append("arrived", arrived);
    formData.append("ticket_price", 200);
    formData.append("departure_date", departure_date);
    formData.append("arrive_date", arrive_date);
    formData.append("photoPath", photoPath);
    formData.append("departure_city", departure_city);
    formData.append("arrive_city", arrive_city);

    fetch(`${ankasa_api}/add-flight`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          console.log("Success");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    navigate("/");
    alert("Success, add Relogin too see updated data!");
    window.location.reload();
  };

  return (
    <div className="col-md-3 p-5 bg-white rounded-3 m-3">
      <div className="first-section text-center">
        <span className="badge rounded-pill bg-primary position-absolute">Admin</span>
        <div className="profile-image d-flex justify-content-center">
          <img src={"/img/userProfile/" + data.photo_path} className="img-fluid rounded-2 mb-2" style={{ maxWidth: "100px" }} alt="" />
        </div>
        {/* <button className="btn col-md-12 border-primary text-primary fw-bold">
          Select Photo
          <input type="file" hidden />
        </button> */}
        <div className="profile-information mt-3">
          <h4>Mike Kowalski</h4>
          <i className="fa-solid fa-location-dot" style={{ color: "#2395ff" }} />
          <span className="text-muted ms-2">Medan, Indonesia</span>
        </div>
      </div>
      <div className="second-section mt-3">
        <div className="row">
          <div className="col mb-2">
            <b>Cards</b>
          </div>
          <div className="col text-primary text-end">
            <a
              href="/"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "smaller",
              }}
            >
              + Add
            </a>
          </div>
        </div>
        <div
          className="row p-3 mb-3 rounded text-white"
          style={{
            backgroundColor: "#2395ff",
            boxShadow: "-0.1em 0.5em 1em #2395ff",
          }}
        >
          <small className="fw-bold">4441 1235 5512 5551</small>
          <small className="col">x card</small>
          <small className="col">$1,123,434</small>
        </div>
      </div>
      <div className="third-section mt-3">
        <ul className="list-unstyled">
          <li className="profilelink">
            <i className="fa-solid fa-user mt-3" />
            <Link to="/profile-edit/1" className="ms-5 fw-bold">
              Profile
            </Link>
          </li>
          <li type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="profilelink">
            <i className="fa-solid fa-plane mt-4" />
            <b className="ms-5">Add Flight</b>
          </li>
          <li className="profilelink">
            <i className="fa-solid fa-gear mt-4" />
            <b className="ms-5">Settings</b>
          </li>
          <li className="profilelinkred">
            <i className="fa-solid fa-right-from-bracket mt-4" />
            <b onClick={handleLogout} className="ms-5">
              Logout
            </b>
          </li>
        </ul>
      </div>

      {/* Modal add new flight*/}
      <form onSubmit={addFlight}>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fw-bold" id="exampleModalLabel">
                  Add New Flight
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div>
                  <label className="mb-2">Airlines : </label>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" value={airlines} onChange={(e) => setAirlines(e.target.value)} required />
                  </div>
                </div>
                <div>
                  <label className="mb-2">Transit/Direct : </label>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" value={transit_type} onChange={(e) => setTransitType(e.target.value)} required />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-6">
                    <label className="mb-2">Departure Time : </label>
                    <div className="input-group mb-3">
                      <input type="time" className="form-control" value={departure} onChange={(e) => setDeparture(e.target.value)} required />
                    </div>
                  </div>
                  <div className="col-6">
                    <label className="mb-2">Arrived Time : </label>
                    <div className="input-group mb-3">
                      <input type="time" className="form-control" value={arrived} onChange={(e) => setArrived(e.target.value)} required />
                    </div>
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col-6">
                    <label className="mb-2">Departure Date : </label>
                    <div className="input-group mb-3">
                      <input type="date" className="form-control" value={departure_date} onChange={(e) => setDepartureDate(e.target.value)} required />
                    </div>
                  </div>
                  <div className="col-6">
                    <label className="mb-2">Arrived Date : </label>
                    <div className="input-group mb-3">
                      <input type="date" className="form-control" value={arrive_date} onChange={(e) => setArriveDate(e.target.value)} required />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <label className="mb-2">Departure City : </label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" value={departure_city} onChange={(e) => setDepartureCity(e.target.value)} required />
                    </div>
                  </div>
                  <div className="col-6">
                    <label className="mb-2">Destination City: </label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" value={arrive_city} onChange={(e) => setArriveCity(e.target.value)} required />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="mb-2">Price : </label>
                  <div className="input-group mb-3">
                    <input type="number" className="form-control" value={ticket_price} onChange={(e) => setTicketPrice(e.target.value)} />
                  </div>
                </div>
                <div className="row check">
                  <label className="mb-2">Facilities :</label>
                  <div className="col-3 form-check ms-3">
                    <input className="form-check-input" type="checkbox" value={luggage} onChange={(e) => setLuggage(e.target.value)} id="flexCheckDefault" />
                    <label className="form-check-label">Lugaggae</label>
                  </div>
                  <div className="col-3 form-check">
                    <input className="form-check-input" type="checkbox" id="flexCheckDefault" value={meal} onChange={(e) => setMeal(e.target.value)} />
                    <label className="form-check-label">Meal</label>
                  </div>
                  <div className="col-3 form-check">
                    <input className="form-check-input" type="checkbox" value={wifi} onChange={(e) => setWifi(e.target.value)} id="flexCheckDefault" />
                    <label className="form-check-label">Wifi</label>
                  </div>
                </div>
                <div>
                  <label className="mb-2 mt-2" htmlFor="photo">
                    {" "}
                    Airlines Photo :{" "}
                  </label>
                  <div className="input-group mb-3">
                    <input type="file" name="photo" className="form-control" onChange={handleUploadChange} required />
                  </div>
                  <div className="d-flex justify-content-center">
                    <img className="img-fluid" src={previewImage ? previewImage : ""} alt="" style={{ width: "100px", height: "100px", borderRadius: "100px" }} />
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary bg-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="submit" className="btn btn-primary bg-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Admin;
