import React, { useEffect, useState } from "react";
// import styled from 'styled-components';
import { Link } from "react-router-dom";

import "../style/search-result.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import MainBar from '../component/MainBar';
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
//redux
import { useSelector } from "react-redux";

//pagination component
import Pagination from "./Pagination.js";

// const Section = styled.section`
//   font-family: 'Poppins', 'sans-serif';
//   margin-top: 90px;
// `;

// const Header = styled.div`
//   background: #2395ff url(/img/assyifa/set-icon.png);
//   width: 100%;
//   height: 176px;
//   border-radius: 0px 0px 30px 30px;
//   background-repeat: no-repeat;
//   display: flex;
//   align-items: center;
// `;

const SearchResult = () => {
  //pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 5;
  //toogle true false sort
  let [toogle, setToogle] = useState(false);

  const toggleSort = () => {
    // inverse the boolean state of passwordShown
    setToogle(!toogle);
  };

  //data from redux
  const { dataFlights } = useSelector((state) => state.flightData);

  //pagination support variables
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = dataFlights.slice(firstPostIndex, lastPostIndex);

  //sort
  if (toogle) {
    currentPost.sort(function (a, b) {
      if (a.airlines < b.airlines) {
        return -1;
      }

      return 0;
    });
  } else {
    currentPost.sort(function (a, b) {
      if (b.airlines < a.airlines) {
        return -1;
      }

      return 0;
    });
  }

  useEffect(() => {
    document.title = `Ankasa - Search Results`;
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-fluid mt-5" style={{ backgroundColor: "#2395ff", borderBottomLeftRadius: "25px", borderBottomRightRadius: "25px" }}>
        <div className="row">
          <div className="col-md-6">
            <div className="row ">
              <div className="col-md-2">
                <img src="/img/assyifa/set-icon.png" style={{ maxWidth: "125px" }} alt="" className="img-fluid position-absolute" />
              </div>
              <div className="col-md-2 mt-5">
                <img src="/img/assyifa/white-icon.png" alt="" className="img-fluid position-absolute" />
              </div>
              <div className="col-md-5">
                <div className="row justify-content-between mt-4">
                  <div className="col-md-2">
                    <p className="text-white">From</p>
                  </div>
                  <div className="col-md-2">
                    <p className="text-white">To</p>
                  </div>
                </div>

                <div className="row justify-content-between mt-2">
                  <div className="col-md-5">
                    <p className="text-white">Medan (IDN)</p>
                  </div>
                  <div className="col-md-2">
                    <i className="fa-solid fa-right-left text-white"></i>
                  </div>
                  <div className="col-md-5">
                    <p className="text-white">Tokyo (JPN)</p>
                  </div>
                </div>

                <div className="row mt-2" style={{ fontSize: "8px" }}>
                  <div className="col-md-6">
                    <p className="text-white">
                      Monday, 20 July 20 <small className="ms-3">&#9679;</small>
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p className="text-white">
                      6 Passenger <small className="ms-3">&#9679;</small>
                    </p>
                  </div>
                  <div className="col-md-1">
                    <p className="text-white">Economy</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <img src="/img/assyifa/set-icon.png" alt="" style={{ visibility: "hidden" }} className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-md text-end"></div>
        </div>
      </div>

      {/* <Header>
          <MainBar />
        </Header> */}

      {/* Start Left Content */}
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="text1 d-flex justify-content-between mt-3">
              <h3 style={{ fontSize: "24px", width: "100%" }}>Filter</h3>
              <h4 className="mt-2" style={{ fontSize: "16px", color: "#2395FF" }}>
                Reset
              </h4>
            </div>

            {/* Styling Card Start */}
            <div
              className="d-flex w-100"
              style={{
                flexDirection: "column",
                backgroundColor: "#FFFFFF",
                borderRadius: "15px",
                padding: "30px",
                marginBottom: "10px",
              }}
            >
              {/* Styling Card End */}

              {/* Filter Start */}
              <div>
                {/* Section 1 Start */}
                {/* Title Start */}
                <div className="d-flex mb-3">
                  <h6 style={{ fontSize: "16px", fontWeight: "600" }}>Transit</h6>
                  <i className="fa-solid fa-angle-up ml-auto ms-auto" style={{ color: "#2395FF" }}></i>
                </div>
                {/* Title End */}

                {/* Checkbox Start */}
                <div className="d-flex mb-3 search-radio">
                  <h6 style={{ fontSize: "14px" }}>Direct</h6>
                  <input type="checkbox" id="direct" name="direct" style={{ marginLeft: "auto", marginRight: "0px" }} />
                </div>
                {/* Checkbox End */}

                <div className="d-flex mb-3 search-radio">
                  <h6 style={{ fontSize: "14px" }}>Transit</h6>
                  <input type="checkbox" id="transit" name="direct" style={{ marginLeft: "auto", marginRight: "0px" }} />
                </div>

                <div className="d-flex mb-4 mt-1 search-radio">
                  <h6 style={{ fontSize: "14px" }}>Transit 2+</h6>
                  <input type="checkbox" id="transit2" name="direct" style={{ marginLeft: "auto", marginRight: "0px" }} />
                </div>

                {/* Line */}
                <hr
                  style={{
                    marginTop: "0px",
                    height: "1px",
                    color: "#E5E5E5",
                    marginBottom: "20px",
                  }}
                />
                {/* Section 1 End */}

                {/* Title 2 Start */}
                <div className="d-flex mb-3">
                  <h6 style={{ fontSize: "16px", fontWeight: "600" }}>Facilities</h6>
                  <i className="fa-solid fa-angle-up ml-auto ms-auto" style={{ color: "#2395FF" }}></i>
                </div>
                {/* Title 2 End */}

                {/* Checkbox 2 Start */}
                <div className="d-flex mb-3 search-radio">
                  <h6 style={{ fontSize: "14px" }}>Luggage</h6>
                  <input type="checkbox" id="direct" name="luggage" style={{ marginLeft: "auto", marginRight: "0px" }} />
                </div>
                {/* Checkbox 2 End */}

                <div className="d-flex mb-3 search-radio">
                  <h6 style={{ fontSize: "14px" }}>In-Flight Meal</h6>
                  <input type="checkbox" id="direct" name="meal" style={{ marginLeft: "auto", marginRight: "0px" }} />
                </div>

                <div className="d-flex mb-4 mt-1 search-radio">
                  <h6 style={{ fontSize: "14px" }}>Wi-fi</h6>
                  <input type="checkbox" id="direct" name="wifi" style={{ marginLeft: "auto", marginRight: "0px" }} />
                </div>

                {/* Line */}
                <hr
                  style={{
                    marginTop: "0px",
                    height: "1px",
                    color: "#E5E5E5",
                    marginBottom: "20px",
                  }}
                />

                {/* Title 3 Start */}
                <div className="d-flex mb-3">
                  <h6 style={{ fontSize: "16px", fontWeight: "600" }}>Departure Time</h6>
                  <i className="fa-solid fa-angle-up ml-auto ms-auto" style={{ color: "#2395FF" }}></i>
                </div>
                {/* Title 3 End */}

                {/* Checkbox Start */}
                <div className="d-flex mb-3 search-radio">
                  <h6 style={{ fontSize: "14px" }}>00:00 - 06:00</h6>
                  <input type="checkbox" id="deptime1" name="depttime" style={{ marginLeft: "auto", marginRight: "0px" }} />
                </div>
                {/* Checkbox End */}

                <div className="d-flex mb-3 search-radio">
                  <h6 style={{ fontSize: "14px" }}>06:00 - 12:00</h6>
                  <input type="checkbox" id="deptime2" name="depttime" style={{ marginLeft: "auto", marginRight: "0px" }} />
                </div>

                <div className="d-flex mb-3 mt-1 search-radio">
                  <h6 style={{ fontSize: "14px" }}>12:00 - 18:00</h6>
                  <input type="checkbox" id="deptime3" name="depttime" style={{ marginLeft: "auto", marginRight: "0px" }} />
                </div>

                <div className="d-flex mb-4 mt-1 search-radio">
                  <h6 style={{ fontSize: "14px" }}>18:00 - 24:00</h6>
                  <input type="checkbox" id="deptime4" name="depttime" style={{ marginLeft: "auto", marginRight: "0px" }} />
                </div>

                {/* Line */}
                <hr
                  style={{
                    marginTop: "0px",
                    height: "1px",
                    color: "#E5E5E5",
                    marginBottom: "20px",
                  }}
                />

                {/* Title 4 Start */}
                <div className="d-flex mb-3">
                  <h6 style={{ fontSize: "16px", fontWeight: "600" }}>Time Arrived</h6>
                  <i className="fa-solid fa-angle-up ml-auto ms-auto" style={{ color: "#2395FF" }}></i>
                </div>
                {/* Title 4 End */}

                {/* Checkbox Start */}
                <div className="d-flex mb-3 search-radio">
                  <h6 style={{ fontSize: "14px" }}>00:00 - 06:00</h6>
                  <input type="checkbox" id="arrtime1" name="arrtime" style={{ marginLeft: "auto", marginRight: "0px" }} />
                </div>
                {/* Checkbox End */}

                <div className="d-flex mb-3 search-radio">
                  <h6 style={{ fontSize: "14px" }}>06:00 - 12:00</h6>
                  <input type="checkbox" id="arrtime2" name="arrtime" style={{ marginLeft: "auto", marginRight: "0px" }} />
                </div>

                <div className="d-flex mb-3 mt-1 search-radio">
                  <h6 style={{ fontSize: "14px" }}>12:00 - 18:00</h6>
                  <input type="checkbox" id="arrtime3" name="arrtime" style={{ marginLeft: "auto", marginRight: "0px" }} />
                </div>

                <div className="d-flex mb-4 mt-1 search-radio">
                  <h6 style={{ fontSize: "14px" }}>18:00 - 24:00</h6>
                  <input type="checkbox" id="arrtime4" name="arrtime" style={{ marginLeft: "auto", marginRight: "0px" }} />
                </div>

                {/* Line */}
                <hr
                  style={{
                    marginTop: "0px",
                    height: "1px",
                    color: "#E5E5E5",
                    marginBottom: "20px",
                  }}
                />

                {/* Title 5 Start */}
                <div className="d-flex mb-3">
                  <h6 style={{ fontSize: "16px", fontWeight: "600" }}>Airlines</h6>
                  <i className="fa-solid fa-angle-up ml-auto ms-auto" style={{ color: "#2395FF" }}></i>
                </div>
                {/* Title 5 End */}

                {/* Checkbox Start */}
                <div className="d-flex mb-3 search-radio">
                  <h6 style={{ fontSize: "14px" }}>Garuda Indonesia</h6>
                  <input
                    type="checkbox"
                    id="airlines1"
                    name="airlines"
                    value="Garuda Indonesia"
                    style={{ marginLeft: "auto", marginRight: "0px" }}
                    // onChange={filteredHandler}
                  />
                </div>
                {/* Checkbox End */}

                <div className="d-flex mb-3 search-radio">
                  <h6 style={{ fontSize: "14px" }}>Air Asia</h6>
                  <input
                    type="checkbox"
                    id="airlines2"
                    name="airlines"
                    value="Air Asia"
                    style={{ marginLeft: "auto", marginRight: "0px" }}
                    // onChange={filteredHandler}
                  />
                </div>

                <div className="d-flex mb-4 mt-1 search-radio">
                  <h6 style={{ fontSize: "14px" }}>Lion Air</h6>
                  <input
                    type="checkbox"
                    id="airlines3"
                    name="airlines"
                    value="Lion Air"
                    style={{ marginLeft: "auto", marginRight: "0px" }}
                    // onChange={filteredHandler}
                  />
                </div>

                {/* Line */}
                <hr
                  style={{
                    marginTop: "0px",
                    height: "1px",
                    color: "#E5E5E5",
                    marginBottom: "20px",
                  }}
                />

                {/* Range Price Start */}
                <div style={{ display: "flex", marginBottom: "30px" }}>
                  <h6 style={{ fontSize: "16px", fontWeight: "600" }}>Ticket Price</h6>
                  <i
                    className="fa-solid fa-angle-up"
                    style={{
                      marginLeft: "auto",
                      marginRight: "0px",
                      color: "#2395FF",
                    }}
                  ></i>
                </div>
                <div className="lowest d-flex justify-content-between">
                  <p>Lowest</p>
                  <p>Highest</p>
                </div>
                <div className="range">
                  <input type="range" className="form-range" id="customRange1" />
                </div>
                <div className="lowest d-flex justify-content-between" style={{ color: "#2395FF" }}>
                  <p>$145,00</p>
                  <p>$300,00</p>
                </div>
                {/* Range Price End */}
              </div>
            </div>
          </div>

          {/* Right Content Start */}
          <div className="col-md-9 mt-3">
            {/* Headline Start */}
            <div className="text9 d-flex justify-content-between">
              <div className="right-text d-flex mt-0">
                <h2 className="mt-1" style={{ fontSize: "24px" }}>
                  Select Ticket
                </h2>
                <p className="ms-2 mt-2 text-muted" style={{ fontSize: "14px" }}>
                  (6 Flight Found)
                </p>
              </div>
              <small>
                <p className="d-flex text-right mt-2" style={{ fontSize: "14px" }}>
                  Sort by
                  <i onClick={toggleSort} className="fa-solid fa-arrow-down-a-z mt-1 ms-2"></i>
                </p>
              </small>
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
              {currentPost.map((data) => (
                <div key={data.id} className="loopingCard mb-3">
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
                      <Link to="/flight" className="btn btn-primary btn-sm mb-4 w-100" style={{ backgroundColor: "#2395FF", border: "0px" }}>
                        Select
                      </Link>
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
              ))}

              {/* Card Body End */}
            </div>
            {/* End Card */}
          </div>
          {/* Right Content End */}
        </div>
      </div>
      <Pagination totalPosts={dataFlights.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <Footer />
    </>
  );
};

export default SearchResult;
