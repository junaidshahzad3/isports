import { useState } from "react";
import "./CustomNavbar.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { Button, Drawer } from "antd";
import useScreenWidth from "../../helpers/useScreenWidth";
import CustomLogo from "../customlogo/CustomLogo";
import { navlinks } from "../../constants/constants";

const CustomNavbar = () => {
  let width = useScreenWidth();
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav>
        <div className="flex justify-center">
          <div className="max-w-[1200px] w-full">
            <div className="flex py-2 px-6 items-center justify-between font-montserrat">
              <Button
                className="lg:hidden flex justify-center items-center p-0 h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  role="presentation"
                  strokeWidth="2"
                  focusable="false"
                  width="22"
                  height="22"
                  className="icon icon-hamburger"
                  viewBox="0 0 22 22"
                >
                  <path
                    d="M1 5h20M1 11h20M1 17h20"
                    stroke="currentColor"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </Button>
              <span className="navbar-logo flex items-center">
                <Link to="/">
                  {/* <img
                    src={logo}
                    alt="logo"
                    className="w-[120px] h-[70px] sm:w-[150px] sm:h-[80px] md:w-[200px] md:h-[100px]"
                    loading="lazy"
                  /> */}
                  <CustomLogo color="black" />
                </Link>
              </span>

              {width > 1023 && (
                <div className="flex space-x-4">
                  {navlinks.map((page) => (
                    <Link key={page.path} to={page.path} className="nav-link">
                      {page.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <Drawer
        className="sidebar-drawer"
        placement="left"
        style={{ width: "100%", maxWidth: "inherit" }}
        onClose={onClose}
        open={isOpen}
        extra={
          <Link to="/">
            <div className="w-20">
              <img src={logo} alt="logo" className="w-full" loading="lazy" />
            </div>
          </Link>
        }
      >
        <div className="flex flex-col space-y-2">
          {navlinks.map((page) => (
            <Link key={page.path} to={page.path} className="nav-link">
              {page.name}
            </Link>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default CustomNavbar;
