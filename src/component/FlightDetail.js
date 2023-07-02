import React from "react";
import "../style/flight.css";
import Garuda from "../aset/atio/garuda-indonesia-logo-BD82882F07-seeklogo 1.png";
import Vector1 from "../aset/atio/vector 3.png";
import Vector from "../aset/atio/Vector.png";
import Footer from "../component/Footer";

const FlightDetail = () => {
  return (
    <>
      <div className="container-fluid header rounded-bottom">
        {/* content header */}
        <div className="background">
          <div className="icon-header position-absolute">
            <img alt="" src={Vector1} />
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="text-header-left position-absolute text-white mt-5">
                <h4>Contact Person Details</h4>
              </div>
              <div className="card left shadow">
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <label className="form-label text-muted">Full Name</label>
                      <input type="username" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label text-muted">Email</label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label text-muted">Phone Number</label>
                      <select className="form-select w-25" aria-label="Default select example">
                        <option selected="">+62</option>
                        <option value={1}>Spanyol</option>
                        <option value={2}>Italy</option>
                        <option value={3}>Chine</option>
                      </select>
                      <input type="Phone" className="form-control" />
                    </div>
                  </form>
                </div>
              </div>
              <div className="pasanger1">
                <div className="text-passanger mt-5">
                  <h4>Passanger Detail</h4>
                </div>
                <div className="card mt-4 shadow">
                  <div className="card-body">
                    <div className="card passanger">
                      <div className="card-body d-flex justify-content-between">
                        <div className="text-card justify-content-start">
                          <p>Passangers : 1 Adult</p>
                        </div>
                        <div className="form-check form-switch">
                          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                            Some Contact Person
                          </label>
                          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        </div>
                      </div>
                    </div>
                    <form>
                      <div className="col-md-3">
                        <label className="form-label text-muted mt-3">Title</label>
                        <select className="form-select w-100 border-0 border-bottom">
                          <option selected="">Mr.</option>
                          <option value={1}>Mrs</option>
                          <option value={2}>Child</option>
                          <option value={3}>Three</option>
                        </select>
                      </div>
                      <div className="mb-3 mt-4">
                        <label className="form-label text-muted">Full Name</label>
                        <input type="username" className="form-control" />
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <label className="form-label text-muted">Nationality</label>
                          <select className="form-select w-100 border-0 border-bottom" aria-label="Default select example">
                            <option selected="">Indonesia</option>
                            <option value={1}>Spanyol</option>
                            <option value={2}>Italy</option>
                            <option value={3}>Chine</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="passanger2">
                <div className="text-2 mt-5">
                  <h4>Passanger Detail</h4>
                </div>
                <div className="card md mt-4 shadow">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                        <label className="form-check-label text-primary" htmlFor="flexCheckDefault">
                          Travel Insurance
                        </label>
                      </div>
                    </li>
                    <li className="list-group-item">Get travel compensation up to $ 10.000.00</li>
                  </ul>
                </div>
              </div>

              <div className="button ms-5 mt-5">
                <button className="btn btn-primary">Proceed to Payment</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-header-right text-dark position-absolute text-white mt-5">
                <h4>Flight</h4>
              </div>
              <div className="card right shadow">
                <div className="card-body">
                  <div className="garuda d-flex">
                    <img src={Garuda} alt="garuda" />
                    <p className="mt-3 ms-4 text-secondary">Garuda Indonesia</p>
                  </div>
                  <div className="arrive d-flex fw-bold mt-4">
                    <div className="text-arrive me-3">
                      <p>Medan (IDN)</p>
                    </div>
                    <div className="icon-arrive me-3">
                      <img src={Vector} alt="" />
                    </div>
                    <div className="text-arrive">
                      <p>Tokyo (JPN)</p>
                    </div>
                  </div>
                  <div className="schedule d-flex text-muted">
                    <div className="date me-2">
                      <p>Sunday, August 2022</p>
                    </div>
                    <div className="icon-schedule me-2">
                      <img src="/aset/Ellipse 48.png" alt="" />
                    </div>
                    <div className="time">
                      <p>12:35 - 15:31</p>
                    </div>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                    <label className="form-check-label text-primary" htmlFor="flexCheckDefault">
                      Refundable
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckChecked" />
                    <label className="form-check-label text-primary" htmlFor="flexCheckChecked">
                      Can Reschedule
                    </label>
                  </div>
                  <div className="accordion mt-4">
                    <div className="accordion-item border-0 border-top">
                      <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Total Payment
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body position-absolute mt-2">
                          <strong>This is the second item's accordion body.</strong>
                          It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS
                          transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightDetail;
