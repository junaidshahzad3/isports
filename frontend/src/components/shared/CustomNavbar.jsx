import { useState } from "react";
import "./CustomNavbar.css";
import { Link } from "react-router-dom";
import { Button, Drawer } from "antd";
import useScreenWidth from "../../helpers/useScreenWidth";
import CustomLogo from "./CustomLogo";
import { navlinks } from "../../constants/constants";
import Search from "./Search";

const CustomNavbar = () => {
  let width = useScreenWidth();
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <nav className="flex justify-center px-6">
      <div className="max-w-[1200px] w-full">
        <div className="flex py-2 items-center justify-between font-montserrat">
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
              <CustomLogo color="black" />
            </Link>
          </span>

          {width > 1023 ? (
            <div className="flex space-x-4 items-center">
              {navlinks.map((page) => (
                <Link key={page.path} to={page.path} className="nav-link">
                  {page.name}
                </Link>
              ))}
              <Search />
            </div>
          ) : (
            <Search />
          )}
        </div>
      </div>

      <Drawer
        className="sidebar-drawer"
        placement="left"
        style={{ width: "100%", maxWidth: "inherit" }}
        onClose={onClose}
        open={isOpen}
        extra={
          <Link to="/">
            <CustomLogo color="black" />
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
    </nav>
  );
};

export default CustomNavbar;
