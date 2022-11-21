import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [burgerNav, setBurgerNav] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Home");

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Contact",
      path: "/ContactUs",
    }
  ];

  return (
    <div className="h-20 w-full bg-white shadow-xl fixed z-50">
      <div className="flex items-center w-full">
        <div className="w-full ml-8 lg:ml-32">
          <img src="m&m logo.png" alt="danoe milk" className="w-14" />
        </div>

        <div className="hidden lg:flex items-center w-full justify-between mr-32">
          {navItems.map((item, index) => {
            return (
              <Link to={item.path}>
                <span
                  key={index}
                  className={`${
                    item.name === selectedItem
                      ? "text-[#e04141]"
                      : "text-[#3E3E3E]"
                  } font-medium`}
                  onClick={() => setSelectedItem(item.name)}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

        <TiThMenu
          className={`${
            !burgerNav ? "flex" : "hidden"
          } lg:hidden h-8 w-8 right-0 fixed mr-8 text-[#e04141]`}
          onClick={() => setBurgerNav(true)}
        />
      </div>

      <div>
        <nav
          className={`${
            burgerNav ? "pointer-events-auto" : "pointer-events-none opacity-0"
          } bg-[#e04141] backdrop-blur-lg h-full w-full flex flex-col items-center fixed top-0 z-50 left-0 transition-all ease-in-out duration-300`}
        >
          <AiOutlineClose
            className="fixed top-0 right-0 h-9 w-9 text-black mt-2 mr-8 lg:hidden cursor-pointer"
            onClick={() => setBurgerNav(false)}
          />

          {navItems.map((item, index) => {
            return (
              <div key={index} className="w-full h-full flex flex-col justify-center items-center">
                <a className="" href={item.path}>
                  <span
                    className={`${
                      item.name === selectedItem
                        ? "text-white"
                        : "text-[#3E3E3E]"
                    } font-medium text-2xl`}
                    onClick={() => setSelectedItem(item.name)}
                  >
                    {item.name}
                  </span>
                </a>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;