import facebookIcon from "../../assets/facebook.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import instagramIcon from "../../assets/instagram.svg";
import twitterIcon from "../../assets/twitter.svg";
import emailIcon from "../../assets/email.svg";
import logoFooter from "../../assets/logo-footer.svg";
import emailPink from "../../assets/email-pink.svg";
import phonePink from "../../assets/phone-pink.svg";
import locationPink from "../../assets/location-pink.svg";
import "./CustomFooter.css";
import { Space } from "antd";
import CustomLogo from "../customlogo/CustomLogo";
import { navlinks } from "../../constants/constants";
import { Link } from "react-router-dom";

const CustomFooter = () => {
  return (
    <div className="max-w-[1200px] w-full text-white">
      <div className="flex justify-between 2xl:flex-row lg:flex-col md:flex-col flex-col gap-10 2xl:gap-0 items-start sm:items-center 2xl:items-start">
        <div className="max-w-[390px] flex flex-col items-start sm:items-center 2xl:items-start text-start sm:text-center 2xl:text-start">
          {/* Mobius Icon Container */}
          <div className="flex-col -ms-10 sm:ms-0 2xl:-ms-10">
            {/* <img
              src={logoFooter}
              loading="lazy"
              alt="karobar"
              className="cursor-pointer hover:brightness-50"
            /> */}
            <CustomLogo color="white" />
          </div>
          {/* Newsletter Content */}
          <p className="">
            Follow every sports news of the 2024, with access to all the live
            scores and stats.
          </p>
          <Space className="mt-6" wrap>
            <img
              src={twitterIcon}
              loading="lazy"
              alt="twitter"
              className="cursor-pointer hover:brightness-50"
            />
            <img
              src={facebookIcon}
              loading="lazy"
              alt="facebook"
              className="cursor-pointer hover:brightness-50"
            />
            <img
              src={linkedinIcon}
              loading="lazy"
              alt="linkedin"
              className="cursor-pointer hover:brightness-50"
            />
            <img
              src={instagramIcon}
              loading="lazy"
              alt="instagram"
              className="cursor-pointer hover:brightness-50"
            />
          </Space>
        </div>

        <div className="flex flex-row 2xl:gap-40 xl:gap-36 lg:gap-32 md:gap-28 gap-x-24 gap-y-8 flex-wrap">
          <div className="flex-col text-start">
            <p className="font-futura-bold md:text-base text-sm md:mb-6 mb-2 text-dullblack">
              Links
            </p>
            <div className="flex space-x-4">
              {navlinks.map((page) => (
                <Link key={page.path} to={page.path} className="nav-link">
                  {page.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex-col text-start">
            <p className="font-futura-bold md:text-base text-sm md:mb-6 mb-2 font-medium text-dullblack">
              Contact Us
            </p>
            <ul className="font-futura-med-condensed md:text-base text-sm font-normal">
              <li className="flex gap-3 mb-1 cursor-pointer hover:brightness-50">
                <img src={emailPink} loading="lazy" alt="email" />{" "}
                <p>0000000000000</p>
              </li>
              <li className="flex gap-3 mb-1 cursor-pointer hover:brightness-50">
                <img src={phonePink} loading="lazy" alt="phone" />
                <p>hello@isports.com</p>
              </li>
              <li className="flex gap-3 mb-1 cursor-pointer hover:brightness-50">
                <img src={locationPink} loading="lazy" alt="location" />{" "}
                <p>San Jose</p>
              </li>
            </ul>
            <div className="mt-8">
              <input
                className="h-[50px] w-full px-4 bg-transparent border border-dividercolor"
                type="email"
                placeholder="Enter E-Mail Address"
              />
              <button className="absolute bg-kbpink p-3 mt-[0.45rem] -ms-12 hover:brightness-50 hover:shadow-lg">
                <img src={emailIcon} loading="lazy" alt="email" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <hr className="border-dividercolor" />
      <br />
      <br />

      {/* Copywrite and Payment Gateways */}
      <div className="text-center">© Copyright 2023 by ISports</div>
      <br />
      <br />
    </div>
  );
};

export default CustomFooter;
