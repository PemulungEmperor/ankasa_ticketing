import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="font-poppinsc pl-[50px] md:px-[165px] pb-[50px]">
        <div className="mt-[150px] md:flex flex-wrap justify-between">
          <div>
            <div className="flex  gap-[15px] items-center cursor-pointer">
              <img src="/img/logoNavbar.png" alt="" />
              <Link className="md:text-2xl text-lg font-semibold text-[#414141]">
                Ankasa
              </Link>
            </div>
            <div>
              <p className="md:leading-8 md:mt-[30px] mt-[10px] text-[#6B6B6B]">
                Find your Flight and explore the <br />
                world with us. We will take care of the rest
              </p>
            </div>
          </div>
          <div className="mt-[30px] md:mt-0">
            <h1 className="text-lg font-semibold">Feature</h1>
            <ul className=" md:mt-[30px] mt-[10px] flex flex-col md:gap-5 text-[#6B6B6B]">
              <Link className="hover:text-black">
                <li>Find Ticket</li>
              </Link>
              <Link className="hover:text-black">
                <li>My Booking</li>
              </Link>
              <Link className="hover:text-black">
                <li>Chat</li>
              </Link>
              <Link className="hover:text-black">
                <li>Notification</li>
              </Link>
            </ul>
          </div>
          <div className="mt-[30px] md:mt-0">
            <h1 className="text-lg font-semibold">Download Ankasa app</h1>
            <div className="md:mt-[30px] mt-[10px] flex flex-col gap-5">
              <img src="/img/playstore.png" alt="" className="w-[200px]" />
              <img src="/img/appstore.png" alt="" className="w-[200px]" />
            </div>
          </div>
          <div className="mt-[30px] md:mt-0">
            <h1 className="text-lg font-semibold">Follow Us</h1>
          </div>
        </div>
        <div className="flex -ml-[50px] md:ml-0 flex-wrap flex-col md:flex-row justify-between items-center mt-[50px] text-[#6B6B6B]">
          <p>&copy; Ankasa. All Rights Reserved.</p>
          <div className="flex ">
            <p>Jakarta Indonesia</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
