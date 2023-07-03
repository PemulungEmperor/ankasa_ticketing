import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Admin from "../component/Admin";
import { useSelector } from "react-redux";
import { getFlights } from "../redux/apiCall";
import Swal from "sweetalert2";
import axios from "axios";
import ankasa_api from "../backend";

const AllBookingAdmin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //redux get flight from db
  const getFlight = async (e) => {
    await getFlights(dispatch);
  };

  const { dataFlights } = useSelector((state) => state.flightData);

  const [previewImage, setPreviewImage] = useState("");

  //form data
  const [airlines, setAirlines] = useState("");
  const [transit_type, setTransitType] = useState("");
  const [luggage, setLuggage] = useState(false); //bool
  const [meal, setMeal] = useState(false); //bool
  const [wifi, setWifi] = useState(false); //bool
  const [departure, setDeparture] = useState("");
  const [arrived, setArrived] = useState("");
  const [ticket_price, setTicketPrice] = useState(); //int
  const [departure_date, setDepartureDate] = useState("");
  const [arrive_date, setArriveDate] = useState("");
  const [photoPath, setPhotoPath] = useState("");
  const [departure_city, setDepartureCity] = useState("");
  const [arrive_city, setArriveCity] = useState("");

  //photo preview
  const handleUploadChange = (e) => {
    let uploaded = e.target.files[0];
    if (e.target.files.length !== 0) {
      setPreviewImage(URL.createObjectURL(uploaded));
      setPhotoPath(uploaded);
    }
  };

  // edit flight

  const editFlight = () => {
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

    fetch(`${ankasa_api}/edit-flight/9`, {
      method: "PUT",
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

    alert("Succes, Relogin to see updated data!");
    navigate("/");
  };

  const showAlert = () => {
    //   console.log(productId)
    Swal.fire({
      title: "Do you want to delete the product?",
      showDenyButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't Delete`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "", "success");
        alert("Succes, Relogin to see updated data!");
        navigate("/");
      } else if (result.isDenied) {
        Swal.fire("Product is not deleted", "", "info");
      }
    });
  };

  // useEffect(()=>{
  //   getFlight()
  // },[])

  return (
    <div style={{ backgroundColor: "#f5f6fa" }}>
      <div className="container mt-2 mb-2 p-4">
        <div className="row">
          {/* Admin Profile */}
          <Admin />
          <div className="col-md-8 m-3">
            <div className="flight-data">
              <div className="row bg-white rounded-3 p-3">
                <p className="text-primary fw-bold">All Flight</p>
                <div className="row mt-2">
                  <h4 className="col fw-bold" style={{ fontSize: "20px" }}>
                    All Flight
                  </h4>
                  <p style={{ cursor: "pointer" }} onClick={getFlight} className="col fw-bold text-primary text-end">
                    Fetch All Flight
                  </p>
                </div>

                <div
                  className="card"
                  style={{
                    flexDirection: "column",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "15px",
                    padding: "30px",
                    border: "none",
                    marginBottom: "20px",
                  }}
                >
                  {/* Card Body Start */}
                  {dataFlights
                    ? dataFlights.map((data) => (
                        <div key={data.id} className="loopingCard mb-2">
                          <div className="card-body d-flex w-100">
                            <div className="img d-flex">
                              <img src={data.photo_path} alt="" />
                              <p className="ms-4 mt-2" style={{ color: "#595959" }}>
                                {data.airlines}
                              </p>
                            </div>
                          </div>
                          <div className="row second-text d-flex">
                            <div className="col-md-2 d-flex mt-1">
                              <div className="ms-3">
                                <p style={{ marginRight: "15px" }}>{data.departure_city}</p>
                                <p style={{ fontSize: "12px", color: "#595959" }}>{data.departure}</p>
                              </div>
                              <div className="img-garuda ms-4" style={{ marginRight: "15px" }}>
                                <img src="/img/assyifa/gray-icon.png" alt="" />
                              </div>
                              <div className="ms-4">
                                <p>{data.arrive_city}</p>
                                <p className="ms-1" style={{ fontSize: "12px", color: "#595959" }}>
                                  {data.arrived}
                                </p>
                              </div>
                            </div>
                            <div className="col-md-2 long-time-2 ms-5" style={{ fontSize: "14px", color: "#595959" }}>
                              <p className="d-flex mb-2 ms-1">2 hours 11 minutes</p>
                              <p className="d-flex ms-4 mb-0" style={{ fontSize: "11px" }}>
                                ({data.transit_type})
                              </p>
                            </div>

                            <div className="col-md-3 icons d-flex justify-content-center">
                              <div className="mt-3 mb-2 icon">
                                {data.luggage ? <i className="col-1 fa-solid fa-suitcase-rolling" style={{ marginRight: "30px", color: "#979797" }}></i> : ""}
                                {data.meal ? <i className="col-1 fa-solid fa-burger" style={{ marginRight: "30px", color: "#979797" }}></i> : ""}
                                {data.wifi ? <i className="col-1 fa-solid fa-wifi" style={{ color: "#979797" }}></i> : ""}
                              </div>
                            </div>

                            <div
                              className="col-md-2 d-flex ms-0 price"
                              style={{
                                marginTop: "10px",
                                color: "#2395FF",
                                fontSize: "12px",
                                fontWeight: "200",
                                marginRight: "20px",
                              }}
                            >
                              <h6 className="d-flex" style={{ marginRight: "10px" }}>
                                ${data.ticket_price}
                              </h6>
                              <h6
                                style={{
                                  color: "#595959",
                                  fontSize: "14px",
                                  fontWeight: "200",
                                }}
                              >
                                /pax
                              </h6>
                            </div>

                            {/* Button Select */}
                            <div className="col-md-2 mt-2">
                              <button data-bs-toggle="modal" data-bs-target="#editFlight" className="btn btn-warning text-white btn-sm mb-4 w-100">
                                Edit
                              </button>
                            </div>
                            <div className="col-md-2 mt-2">
                              <button
                                onClick={async (e) => {
                                  await axios.delete(`${ankasa_api}/delete-flight/` + data.id);
                                  showAlert();
                                }}
                                className="btn btn-danger text-white btn-sm mb-4 w-100"
                              >
                                Delete
                              </button>
                            </div>
                          </div>

                          <div className="row ms-1 mx-1 view-detail">
                            <Link
                              to=""
                              className="btn ms-0 d-flex"
                              style={{
                                fontWeight: "600",
                                fontSize: "14px",
                                color: "#2395ff",
                              }}
                            >
                              View Detail
                              <i
                                className="fa-solid fa-angle-right"
                                style={{
                                  marginTop: "2px",
                                  marginLeft: "20px",
                                  fontWeight: "600",
                                  fontSize: "16px",
                                }}
                              ></i>
                            </Link>
                          </div>
                        </div>
                      ))
                    : ""}

                  {/* Card Body End */}
                </div>
                {/* search admin
                <form className="d-flex form mt-3">
                  <input id="sb" className="form-control rounded-3 p-3" type="search" placeholder=" Search" style={{fontFamily : 'Arial, FontAwesome',"height":"10px"}} />
                  <button className="btn btn-primary" hidden>Get</button>
                </form> */}
              </div>
              {/* Modal add new flight*/}
              <form onSubmit={editFlight}>
                <div className="modal fade" id="editFlight" tabIndex="-1" aria-labelledby="editFlightLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title fw-bold" id="editFlightLabel">
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
                          <p className="mb-2" htmlFor="facilities">
                            Facilities :
                          </p>
                          <div className="col-3 form-check ms-3">
                            <input className="form-check-input" type="checkbox" value={luggage} onChange={(e) => setLuggage(e.target.value)} id="lugaggae" />
                            <label className="form-check-label" htmlFor="lugaggae">
                              Lugaggae
                            </label>
                          </div>
                          <div className="col-3 form-check">
                            <input className="form-check-input" type="checkbox" id="meal" value={meal} onChange={(e) => setMeal(e.target.value)} />
                            <label className="form-check-label" htmlFor="meal">
                              Meal
                            </label>
                          </div>
                          <div className="col-3 form-check">
                            <input className="form-check-input" type="checkbox" value={wifi} onChange={(e) => setWifi(e.target.value)} id="wifi" />
                            <label className="form-check-label" htmlFor="wifi">
                              Wifi
                            </label>
                          </div>
                        </div>
                        <div>
                          <label className="mb-2 mt-2"> Airlines Photo : </label>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBookingAdmin;
