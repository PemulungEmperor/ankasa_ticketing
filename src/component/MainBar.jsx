import React from 'react';

const MainBar = () => {
  return (
    <>
      <div
        className="d-flex mx-5 text-white"
        style={{
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <div className="header d-flex">
          <div className="img-plane" style={{paddingTop: '50px', paddingLeft: '50px'}}>
            <img src="/img/assyifa/white-icon.png" alt="" className="img-fluid" />
          </div>

          <div className="search-area d-flex px-2 ms-2">
            <div className="left-search d-flex flex-column flex-fill py-3 justify-content-center">
              <div className="content-wrapper">
                <div className="top d-flex justify-content-between">
                  <div
                    className="d-flex ms-5"
                    style={{ fontSize: '14px', opacity: '70%' }}
                  >
                    From
                  </div>
                  <div
                    className="d-flex ms-5"
                    style={{ fontSize: '14px', opacity: '70%' }}
                  >
                    To
                  </div>
                </div>

                <div className="middle d-flex mt-2 justify-content-between">
                  <select
                    name="deptCity"
                    id="deptCity"
                    className="d-flex ms-5 my-2"
                    style={{
                      marginLeft: '0px',
                      border: 'none',
                      backgroundColor: 'transparent',
                      color: '#FFFFFF',
                      fontSize: '14px',
                    }}
                  >
                    {/* Option Dept City */}
                    <option value="deptCity">Medan (IDN)</option>
                  </select>

                  <i className="mr-auto ms-5 mt-2 fa-solid fa-right-left"></i>

                  <select
                    name="arrCity"
                    id="arrCity"
                    className="d-flex ms-5 my-2"
                    style={{
                      marginLeft: '0px',
                      border: 'none',
                      backgroundColor: 'transparent',
                      color: '#FFFFFF',
                      fontSize: '14px',
                    }}
                  >
                    <option value="arrCity">Tokyo (JPN)</option>
                  </select>
                </div>

                <div className="bottom d-flex ms-5 mt-1 justify-content-between">
                  <div className="detail">
                    <span style={{ fontSize: '12px', opacity: '70%' }}>
                      Monday, 20 July 20
                    </span>
                    <small className="ms-3">&#9679;</small>
                    <span
                      className="ms-2"
                      style={{ fontSize: '12px', opacity: '70%' }}
                    >
                      6 Passenger
                    </span>
                    <small className="ms-3">&#9679;</small>
                    <span
                      className="ms-2"
                      style={{ fontSize: '12px', opacity: '70%' }}
                    >
                      Economy
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-end align-items-center">
          <div className="my-2">
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBar;
