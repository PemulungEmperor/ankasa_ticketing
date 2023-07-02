import React from "react";
import "../style/Ticket.css";
const TicketDetail = () => {
  return (
    <div className="bg-primary">
      <div className="container p-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-9 bg-white rounded-3 m-5 p-5">
            <div className="row d-flex align-items-center">
              <h2 className="col-md fw-bold" style={{ fontSize: "30px" }}>
                Booking Pass
              </h2>
              <div className="col-md text-end">
                <button className="btn" type="button">
                  <i className="fa-solid fa-ellipsis-vertical text-primary" style={{ fontSize: "2em" }} />
                </button>
              </div>
            </div>
            <div id="borderTicket" className="row d-flex align-items-center justify-content-center rounded-4 mt-5 me-3">
              <div id="dottedTicket" className="col-md-8 p-5">
                <div className="row">
                  <div className="col-md-4 logoAirlines">
                    <img className="img-fluid" src="/img/garuda.png" alt="" style={{ maxWidth: "250px" }} />
                  </div>
                  <div className="col-md-2 nationTag">
                    <h4 className="fw-bold" style={{ fontSize: "20px" }}>
                      IDN
                    </h4>
                  </div>
                  <div className="col-md-1 flightLogo mt-2">
                    <img src="/img/plane.png" alt="" />
                  </div>
                  <div className="col-md-2 nationTag">
                    <h4 className="fw-bold" style={{ fontSize: "20px" }}>
                      JPN
                    </h4>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-6">
                    <div className>
                      <label className="text-muted">Code</label>
                      <p>AB-221</p>
                    </div>
                    <div>
                      <label className="text-muted">Terminal</label>
                      <p>A</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className>
                      <label className="text-muted">Class</label>
                      <p>Economy</p>
                    </div>
                    <div className>
                      <label className="text-muted">Gate</label>
                      <p>221</p>
                    </div>
                  </div>
                  <div className="departure">
                    <div>
                      <label className="text-muted">Departure</label>
                      <p>Monday, 20 July'20 - 12:33</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 p-5">
                <div className style={{ marginLeft: "-10px" }}>
                  <img src="/img/QR.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetail;
