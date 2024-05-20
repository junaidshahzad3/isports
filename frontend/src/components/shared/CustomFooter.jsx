import facebookIcon from "../../assets/facebook.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import instagramIcon from "../../assets/instagram.svg";
import twitterIcon from "../../assets/twitter.svg";
import emailIcon from "../../assets/email.svg";
import emailPink from "../../assets/email-pink.svg";
import phonePink from "../../assets/phone-pink.svg";
import locationPink from "../../assets/location-pink.svg";
import "./CustomFooter.css";
import { Space } from "antd";
import CustomLogo from "./CustomLogo";
import { navlinks } from "../../constants/constants";
import { Link } from "react-router-dom";

const CustomFooter = () => {
  return (
    <div className="max-w-[1200px] w-full text-black">
      <div className="flex justify-between flex-col lg:flex-row gap-10 2xl:gap-0 items-center lg:items-start">
        <div className="max-w-[390px] flex flex-col items-center lg:items-start text-center lg:text-start">
          {/*  Icon Container */}
          <Link to="/">
            <CustomLogo color="black" />
          </Link>
          {/* Newsletter Content */}
          <p className="">
            Follow every sports news, with access to all the live scores and
            stats.
          </p>
          {/* <Space className="mt-6" wrap>
            <img
              src={twitterIcon}
              loading="lazy"
              alt="twitter"
              className="cursor-pointer hover:brightness-90"
            />
            <img
              src={facebookIcon}
              loading="lazy"
              alt="facebook"
              className="cursor-pointer hover:brightness-90"
            />
            <img
              src={linkedinIcon}
              loading="lazy"
              alt="linkedin"
              className="cursor-pointer hover:brightness-90"
            />
            <img
              src={instagramIcon}
              loading="lazy"
              alt="instagram"
              className="cursor-pointer hover:brightness-90"
            />
          </Space> */}
        </div>

        <div className="flex flex-row 2xl:gap-40 xl:gap-36 lg:gap-32 md:gap-28 gap-x-24 gap-y-8 flex-wrap">
          <div className="flex-col text-start">
            <p className="font-futura-bold md:text-base text-sm md:my-6 my-2 text-dullblack">
              Links
            </p>
            <div className="flex flex-col items-start space-y-3">
              {navlinks.map((page) => (
                <Link key={page.path} to={page.path} className="nav-link">
                  {page.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex-col text-start">
            <p className="font-futura-bold md:text-base text-sm md:my-6 my-2 font-medium text-dullblack">
              Contact Us
            </p>
            <ul className="font-futura-med-condensed md:text-base text-sm font-normal">
              <li className="flex gap-3 mb-1 cursor-pointer hover:brightness-90">
                <img src={phonePink} loading="lazy" alt="phone" />
                <p>+923244540373</p>
              </li>
              {/* <li className="flex gap-3 mb-1 cursor-pointer hover:brightness-90">
                <img src={emailPink} loading="lazy" alt="email" />{" "}
                <p>hello@isports.com</p>
              </li> */}
              <li className="flex gap-3 mb-1 cursor-pointer hover:brightness-90">
                <img src={locationPink} loading="lazy" alt="location" />{" "}
                <p>19c Corporation Colony Chohan Road Islampura Lahore</p>
              </li>
            </ul>
            {/* <div className="mt-8">
              <input
                className="h-[50px] w-full px-4 bg-transparent border border-dividercolor"
                type="email"
                placeholder="Enter E-Mail Address"
              />
              <button className="absolute bg-kbpink p-3 mt-[0.45rem] -ms-12 hover:brightness-50 hover:shadow-lg">
                <img src={emailIcon} loading="lazy" alt="email" />
              </button>
            </div> */}
          </div>
        </div>
      </div>

      <br />
      <br />
      <hr className="border-dividercolor" />
      <br />
      <br />

      {/* Copywrite and Payment Gateways */}
      <div className="text-center">© Copyright 2018 by ISports</div>
      <br />
      <br />
    </div>
  );
};

export default CustomFooter;
