import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import { Link, NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const navlink = (
    <>
      <li className="text-xl font-primaryFont font-extrabold rounded-sm transition-all border-black">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-white font-bold" : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li className="text-xl font-primaryFont font-extrabold rounded-sm transition-all border-black">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-white font-bold" : ""
          }
          to={"/shop"}
        >
          Shop
        </NavLink>
      </li>
      <li className="text-xl font-primaryFont font-extrabold rounded-sm transition-all border-black">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-white font-bold" : ""
          }
          to={"/contact"}
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  const [visibility, setVisibility] = useState(
    localStorage.getItem("visibility") === "false" ? false : true
  );
  const handleVisibility = () => {
    setVisibility(!visibility);
    console.log(visibility);
  };
  useEffect(() => {
    localStorage.setItem("visibility", visibility);
  }, [visibility]);

  const copyText = (e) => {
    const text = e.target.innerText;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Text Copied");
      })
      .catch((error) => {
        alert("Opps! Something went wrong", error);
      });
  };
  return (
    <div className="bg-gray-200">
      <Tooltip id="copy-tooltip"></Tooltip>
      {visibility && (
        <div className="hidden font-thin md:flex md:max-w-xl items-center lg:max-w-5xl font-mono mx-auto mb-1 justify-between bg-black text-white px-8 rounded-full">
          <div>
            <h3>
              Flat <span className="text-yellow-200">25%</span> discount
            </h3>
          </div>
          <div>
            <h3>
              Use Coupon{" "}
              <span
                data-tooltip-id="copy-tooltip"
                data-tooltip-content="Copy"
                onClick={copyText}
                className="underline cursor-pointer underline-offset-2 decoration-wavy decoration-yellow-400 text-yellow-300"
              >
                FLAT25OFF
              </span>
              <span className="font-bold text-lg ml-5">
                <span
                  onClick={handleVisibility}
                  className="text-lg hover:cursor-pointer"
                >
                  X
                </span>
              </span>
            </h3>
          </div>
        </div>
      )}
      {/* navbar */}
      <div className="navbar bg-yellow-300 px-8">
        <div className="md:navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu flex gap-6 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlink}
            </ul>
          </div>
          <Link className="ml-3" to={"/"}>
            <div className="flex justify-center items-center gap-3">
              <h2 className="text-xl font-primaryFont font-extrabold">
                TrendyWear
              </h2>
              <img
                className="hidden md:block rounded-tl-full rounded-bl-full rounded-br-full h-14"
                src="/logo.svg"
                alt="logo"
              />
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu flex gap-6 menu-horizontal px-1">{navlink}</ul>
        </div>
        <div className="navbar-end">
          <div className="relative cursor-pointer" title="cart">
            <FiShoppingCart className="mr-8 text-4xl text-white" />
            <p className="absolute text-white bottom-6 right-9 font-bold">0</p>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
