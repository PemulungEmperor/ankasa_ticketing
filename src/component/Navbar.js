import React, { useState, useEffect } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getFlightsSearch } from "../redux/apiCall";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.userCredentials);

  const [search, setSearch] = useState("");

  const isLoggedIn = !!localStorage.getItem("token");
  const [admin, setAdmin] = useState(false);
  const [userId, setUserId] = useState();

  //redux get flight from db
  const getFlightSearch = async (e) => {
    e.preventDefault();

    await getFlightsSearch(search, dispatch);
    navigate(`/search-result`);
  };

  useEffect(() => {
    const jwtToken = localStorage.getItem("token");

    const token = jwtToken ? jwtToken.replace("Bearer ", "") : "";

    if (token) {
      const decodedToken = jwt_decode(token);
      const admin = decodedToken.admin;
      const userId = decodedToken.id;

      setAdmin(admin);
      setUserId(userId);
    }
  }, []);

  return (
    <>
      <div className="flex justify-between items-center md:pt-[30px] pt-[20px] md:px-[130px] px-[20px] pb-3">
        <div className="flex justify-center gap-[5px] md:gap-[15px] items-center cursor-pointer">
          <img src="/img/logoNavbar.png" alt="" />
          <Link to="/" className="text-2xl font-semibold text-[#414141]">
            Ankasa
          </Link>
        </div>
        <div className="md:flex hidden justify-center gap-[50px] items-center">
          <div className="relative">
            <form>
              <input type="search" name="" id="" placeholder="Where you want to go?" className="pl-10 pr-4 py-3 bg-[#F5F5F5] rounded-xl placeholder:text-sm" value={search} onChange={(e) => setSearch(e.target.value)} />
              <button className="btn btn-info" hidden onClick={getFlightSearch}>
                Get
              </button>
            </form>
            <SearchIcon className="absolute w-5 h-5 text-gray-500 left-3 top-3.5 cursor-pointer" />
          </div>
          <Link to="/" className="text-lg font-medium hover:text-primary">
            Find Ticket
          </Link>
          {admin === true ? (
            <Link to={"/profile-admin/" + userId} className="text-lg font-medium hover:text-primary">
              All Flight
            </Link>
          ) : (
            <Link to="/booking/1" className="text-lg font-medium hover:text-primary">
              My Booking
            </Link>
          )}
        </div>
        {isLoggedIn ? (
          <Link to={admin === false ? "/profile-edit/" + userId : "/profile-admin/" + userId}>
            {admin === true ? (
              <span className="badge rounded-pill bg-primary ms-1" style={{ fontSize: "10px" }}>
                Admin
              </span>
            ) : (
              ""
            )}
            <img src={data.photo_path} alt="Profile" className="w-[50px] h-[50px] border-2 border-primary rounded-full object-cover" />
          </Link>
        ) : (
          <Link to={"/login"}>
            <button className="w-[150px] h-[50px] bg-primary rounded-lg font-bold text-base text-white hover:bg-blue-500 hover:shadow-lg">Sign Up</button>
          </Link>
        )}
      </div>
    </>
  );
};

export default Navbar;
