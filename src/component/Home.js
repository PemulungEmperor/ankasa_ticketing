import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { RefreshIcon } from "@heroicons/react/outline";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
import { ArrowNarrowLeftIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/outline";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link, useNavigate } from "react-router-dom";
//redux
import { useDispatch } from "react-redux";
import { getFlights } from "../redux/apiCall";

const LandingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //redux get flight from db
  const getFlight = async (e) => {
    e.preventDefault();

    await getFlights(dispatch);
    navigate("/search-result");
  };

  return (
    <div>
      <Navbar />

      {/* header */}
      <header className="font-poppins relative mt-[70px]">
        {/* Search bar in Mobile */}
        <form>
          <div className="relative text-center mb-8 md:hidden block">
            <input type="search" name="" id="" placeholder="Where you want to go?" className="pl-10 pr-4 py-3 bg-[#F5F5F5] rounded-xl placeholder:text-sm" />
            <SearchIcon className="absolute w-5 h-5 text-gray-500 left-20 top-3.5 cursor-pointer" />
          </div>
        </form>
        {/* Image Landing Page */}
        <div className="md:block hidden">
          <div className="flex justify-between">
            <div>
              <div className="ml-[130px] text-[#414141] mt-[150px]">
                <h1 className=" text-[54px] font-semibold ">
                  Find your <span className="text-primary">Flight</span>
                </h1>
                <p className="text-lg">and explore the world with us</p>
              </div>
              <img src="/img/headerImage.png" alt="" className="mt-[90px]" />
            </div>
            <div className="mt-[58px]">
              <img src="/img/headerImage2.png" alt="" className="" />
              <img src="/img/blup.png" alt="" className="mt-[130px] ml-[70px] " />
            </div>
          </div>
        </div>

        {/* Card reservation */}
        <form onSubmit={getFlight}>
          <div className="md:w-[400px] h-[750px] w-[100%]  bg-white shadow-xl shadow-current md:absolute top-[110px] right-[240px] rounded-2xl">
            <div className="px-[40px] py-[30px]">
              <div>
                <p className="text-base font-semibold">Hey,</p>
                <h1 className="text-xl font-semibold mt-2">Where you want to go?</h1>
              </div>
              <Link className="flex justify-between mt-3">
                <h1 className="font-semibold text-base text-primary">Recently Searched</h1>
                <ChevronRightIcon className="w-6 h-6 text-primary" />
              </Link>
              {/* Card from to destinations */}
              <div className="w-full h-[110px] shadow-custom rounded-xl flex justify-between px-[20px] py-[13px] mt-4">
                <div className="">
                  <p className="text-xs font-normal text-[#979797]">From</p>
                  <h1 className="text-xl font-semibold mt-2">Medan</h1>
                  <p className="text-xs font-normal text-[#979797]">Indonesia</p>
                </div>
                <div className="mt-4 cursor-pointer">
                  <ArrowNarrowRightIcon className="w-6 h-6 text-primary ml-1" />
                  <ArrowNarrowLeftIcon className="w-8 h-6 text-primary -mt-3 " />
                </div>
                <div>
                  <p className="text-xs font-normal text-[#979797]">To</p>
                  <h1 className="text-xl font-semibold mt-2">Tokyo</h1>
                  <p className="text-xs font-normal text-[#979797]">Japan</p>
                </div>
              </div>
              {/* Button One Way and Round Trip */}
              <div className="flex justify-between mt-4">
                <button className="flex items-center md:justify-between justify-center md:gap-0 gap-4 w-[47%] h-[55px] bg-primary md:py-3 md:px-8 rounded-md hover:bg-blue-500 hover:shadow-lg">
                  <img src="/img/logo.png" alt="" />
                  <p className="md:text-base text-sm font-semibold text-white ">One way</p>
                </button>
                <button className="flex items-center md:justify-between justify-center md:gap-0 gap-4 w-[47%] h-[55px] bg-[#F0F0F0] md:py-3 md:px-8 rounded-md hover:bg-slate-100 hover:shadow-lg">
                  <RefreshIcon className="w-6 h-6 text-[#595959]" />
                  <p className="md:text-base text-sm font-semibold text-[#595959] ">Round Trip</p>
                </button>
              </div>
              {/* Date of Reservation */}
              <div className="mt-4">
                <label className="text-base font-medium text-[#6B6B6B]">Departure</label>
                <div className="w-full h-[55px] border flex justify-between items-center px-[21px] py-[16px] mt-2 rounded-md">
                  <h1 className="text-sm font-bold">Monday, 20 July 2020</h1>
                  <Link>
                    <ChevronRightIcon className="w-6 h-6 text-primary" />
                  </Link>
                </div>
              </div>
              {/* Persons of reservations */}
              <div className="mt-4">
                <label className="text-base font-medium text-[#6B6B6B]">How many person?</label>
                <div className="flex justify-between items-center mt-2">
                  <div className="w-[47%] h-[55px] border flex justify-between items-center px-[21px] py-[16px] rounded-md">
                    <h1 className="text-sm font-bold">2 Child</h1>
                    <Link>
                      <ChevronRightIcon className="w-6 h-6 text-primary" />
                    </Link>
                  </div>
                  <div className="w-[47%] h-[55px] border flex justify-between items-center px-[21px] py-[16px] rounded-md">
                    <h1 className="text-sm font-bold">4 Adult</h1>
                    <Link>
                      <ChevronRightIcon className="w-6 h-6 text-primary" />
                    </Link>
                  </div>
                </div>
              </div>
              {/*Radio Button Date of Reservation */}
              <div className="mt-4">
                <p className="text-base font-medium text-[#6B6B6B] ">Which class do you want?</p>
                <div className="flex justify-between mt-3">
                  <label className="flex gap-2 text-sm font-bold">
                    <input type="radio" name="" id="" />
                    Economy
                  </label>
                  <label className="flex gap-2 text-sm font-bold">
                    <input type="radio" name="" id="" />
                    Business
                  </label>
                  <label className="flex gap-2 text-sm font-bold">
                    <input type="radio" name="" id="" />
                    First Class
                  </label>
                </div>
              </div>
              {/* Button Submit */}
              <button type="submit" className="w-full h-[57px] bg-primary flex justify-between items-center py-[15px] px-[36px] mt-6 rounded-xl hover:bg-blue-500 hover:shadow-lg">
                <h1 className="text-lg font-bold text-white">SEARCH FLIGHT</h1>
                <ArrowNarrowRightIcon className="w-8 h-8 text-white" />
              </button>
            </div>
          </div>
        </form>
      </header>
      {/* main content || Card Destinations*/}
      <main className="md:mt-[175px] mt-32 md:ml-[130px] ml-[40px]">
        <section>
          {/* Text Trending */}
          <div>
            <h1 className="text-base font-medium text-primary tracking-[0.3em]">TRENDING</h1>
            <div className="md:flex md:justify-between md:items-center mr-[30px] md:mr-[130px] mt-2">
              <h1 className="md:text-2xl text-lg font-bold mb-8 md:mb-0">Trending Destinations</h1>
              <Link className="text-base font-semibold text-primary hover:font-bold">View all</Link>
            </div>
          </div>
          {/* Content Trending Destinations */}
          <div className="flex flex-wrap gap-3 md:mt-14 mt-8 ml-[50px] md:-ml-9">
            {/* image content */}
            <div className="w-[216px] h-[275px] rounded-3xl shadow-custom cursor-pointer hover:shadow-md">
              <div className="px-6 py-6">
                <img src="/img/ContentImage.png" alt="" className="rounded-3xl " />
                <div className="mt-6">
                  <h1 className="text-base font-bold">Tokyo,</h1>
                  <div className="flex justify-between items-center gap-10 mt-2">
                    <h1 className="text-2xl font-bold">Japan</h1>
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-2">
                      <ChevronRightIcon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[216px] h-[275px] rounded-3xl shadow-custom cursor-pointer hover:shadow-md">
              <div className="px-6 py-6">
                <img src="/img/ContentImage.png" alt="" className="rounded-3xl " />
                <div className="mt-6">
                  <h1 className="text-base font-bold">Tokyo,</h1>
                  <div className="flex justify-between items-center gap-10 mt-2">
                    <h1 className="text-2xl font-bold">Japan</h1>
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-2">
                      <ChevronRightIcon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[216px] h-[275px] rounded-3xl shadow-custom cursor-pointer hover:shadow-md">
              <div className="px-6 py-6">
                <img src="/img/ContentImage.png" alt="" className="rounded-3xl " />
                <div className="mt-6">
                  <h1 className="text-base font-bold">Tokyo,</h1>
                  <div className="flex justify-between items-center gap-10 mt-2">
                    <h1 className="text-2xl font-bold">Japan</h1>
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-2">
                      <ChevronRightIcon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[216px] h-[275px] rounded-3xl shadow-custom cursor-pointer hover:shadow-md">
              <div className="px-6 py-6">
                <img src="/img/ContentImage.png" alt="" className="rounded-3xl " />
                <div className="mt-6">
                  <h1 className="text-base font-bold">Tokyo,</h1>
                  <div className="flex justify-between items-center gap-10 mt-2">
                    <h1 className="text-2xl font-bold">Japan</h1>
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-2">
                      <ChevronRightIcon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[216px] h-[275px] rounded-3xl shadow-custom cursor-pointer hover:shadow-md">
              <div className="px-6 py-6">
                <img src="/img/ContentImage.png" alt="" className="rounded-3xl " />
                <div className="mt-6">
                  <h1 className="text-base font-bold">Tokyo,</h1>
                  <div className="flex justify-between items-center gap-10 mt-2">
                    <h1 className="text-2xl font-bold">Japan</h1>
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-2">
                      <ChevronRightIcon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* content destinatios top 10 */}
        <section className="mt-[150px] -z-10 mr-[30px] md:-ml-[50px]">
          <div className="relative ">
            <div className="w-[95%] mx-auto h-[600px] bg-primary rounded-3xl">
              {/* Text top 10 */}
              <div className="flex flex-col items-center justify-center pt-[67px]">
                <h1 className="tracking-[0.3em] text-base text-white">TOP 10</h1>
                <h1 className="md:text-2xl text-xl font-bold text-white mt-2">Top 10 Destinations</h1>
              </div>

              {/* Image of Content */}
              <div className="flex flex-wrap md:gap-16 gap-10 justify-center items-center mt-14 z-20">
                <div className="flex flex-col justify-center items-center">
                  <div className="md:mt-12 w-[75px] h-[75px] md:w-[150px] md:h-[150px] rounded-full md:border-[5px] border-[3px] flex items-center justify-center">
                    <img src="/img/imageDestinations.png" alt="" className="rounded-full w-[60px] md:w-[122px]" />
                  </div>
                  <h1 className="text-base md:text-xl text-white mt-2 md:mt-5">PARIS</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="md:mt-12 w-[75px] h-[75px] md:w-[150px] md:h-[150px] rounded-full md:border-[5px] border-[3px] flex items-center justify-center">
                    <img src="/img/imageDestinations.png" alt="" className="rounded-full w-[60px] md:w-[122px]" />
                  </div>
                  <h1 className="text-base md:text-xl text-white mt-2 md:mt-5">PARIS</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="md:mt-12 w-[75px] h-[75px] md:w-[150px] md:h-[150px] rounded-full md:border-[5px] border-[3px] flex items-center justify-center">
                    <img src="/img/imageDestinations.png" alt="" className="rounded-full w-[60px] md:w-[122px]" />
                  </div>
                  <h1 className="text-base md:text-xl text-white mt-2 md:mt-5">PARIS</h1>
                </div>
                <div className="md:flex flex-col justify-center items-center hidden ">
                  <div className="md:mt-12 w-[75px] h-[75px] md:w-[150px] md:h-[150px] rounded-full md:border-[5px] border-[3px] flex items-center justify-center">
                    <img src="/img/imageDestinations.png" alt="" className="rounded-full w-[60px] md:w-[122px]" />
                  </div>
                  <h1 className="text-base md:text-xl text-white mt-2 md:mt-5">PARIS</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="md:mt-12 w-[75px] h-[75px] md:w-[150px] md:h-[150px] rounded-full md:border-[5px] border-[3px] flex items-center justify-center">
                    <img src="/img/imageDestinations.png" alt="" className="rounded-full w-[60px] md:w-[122px]" />
                  </div>
                  <h1 className="text-base md:text-xl text-white mt-2 md:mt-5">PARIS</h1>
                </div>
              </div>
              {/* Button Next and Prev */}
              <div className="mt-[50px]">
                <div className="flex items-center justify-center gap-[50px]">
                  <button className="w-[80px] h-[50px] bg-primary border-2 border-white rounded-xl flex items-center justify-center">
                    <ChevronLeftIcon className="text-white w-8 h-8" />
                  </button>
                  <button className="w-[80px] h-[50px] bg-white rounded-xl flex items-center justify-center">
                    <ChevronRightIcon className="text-primary w-8 h-8" />
                  </button>
                </div>
              </div>
              {/* image airplane */}
              {/* <div className="absolute bottom-0 -z-[1]">
                <img src={airplan} alt="" className="w-[700px] h-[350px]" />
              </div> */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
