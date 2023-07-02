import React from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";

const Booking = () => {
  return (
    <div style={{ "backgroundColor": "#f5f6fa" }}>
      <div className="container mt-2 mb-2 p-4">
        <div className="row">
          <Profile/>
          <div className="col-md-8 m-3">
            <div className="flight-data">
              <div className="row bg-white rounded-3 p-3">
                <p className="text-primary fw-bold">My Booking</p>
                <div className="row mt-2">
                  <p className="col fw-bold" style={{ "fontSize":"20px" }}>My Booking</p>
                  <p className="col fw-bold text-primary text-end">
                    Order History
                  </p>
                </div>
              </div>
              <div className="row bg-white rounded-3 p-3 mt-3">
                <p>Monday, 20 July'20 - 12:33</p>
                <div className="row destination">
                  <div id="nationTag" className="col-md-1 fw-bold">
                    IDN
                  </div>
                  <div className="col-md-1 ms-2 mt-2">
                    <img className="img-fluid" src="/img/plane.png" alt="" />
                  </div>
                  <div id="nationTag" className="col-md-1 fw-bold">
                    JPN
                  </div>
                </div>
                <div className="row mt-2 mb-2">
                  <p className="col text-muted fw-light">
                    Garuda Indonesia, AB-221
                  </p>
                </div>
                <hr />
                <div className="row mt-3">
                  <p className="col-md-2 text-muted fw-light">Status</p>
                  <div className="col-md-4 d-flex justify-content-center">
                    <button
                      className="btn text-white"
                      style={{ backgroundColor: "#FF7F23" }}
                    >
                      Waiting for Payment
                    </button>
                  </div>
                  <div className="col-md text-primary fw-bold d-flex justify-content-end">
                    <div className="accordion-item">
                      <Link to="/ticket-detail/1"
                        className="accordion-button collapsed"
                       
                      >
                        View Details
                        <i className="fa-solid fa-chevron-down ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse mt-3"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">Ticket details....</div>
                </div>
              </div>
              <div className="row bg-white rounded-3 p-3 mt-3">
                <p>Monday, 20 July'20 - 12:33</p>
                <div className="row destination">
                  <div id="nationTag" className="col-md-1 fw-bold">
                    IDN
                  </div>
                  <div className="col-md-1 ms-2 mt-2">
                    <img className="img-fluid" src="/img/plane.png" alt="" />
                  </div>
                  <div id="nationTag" className="col-md-1 fw-bold">
                    JPN
                  </div>
                </div>
                <div className="row mt-2 mb-2">
                  <p className="col text-muted fw-light">
                    Garuda Indonesia, AB-221
                  </p>
                </div>
                <hr />
                <div className="row mt-3">
                  <p className="col-md-2 text-muted fw-light">Status</p>
                  <div className="col-md-4 d-flex justify-content-center">
                    <button
                      className="btn text-white"
                      style={{ backgroundColor: "#4FCF4D" }}
                    >
                      Eticket issued
                    </button>
                  </div>
                  <div className="col-md text-primary fw-bold d-flex justify-content-end">
                    <div className="accordion-item">
                      <Link to="/ticket-detail/1"
                        className="accordion-button collapsed"
                      >
                        View Details
                        <i className="fa-solid fa-chevron-down ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse mt-3"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">Ticket details....</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
