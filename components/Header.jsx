import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function Header() {
  const Links = [
    { id: 1, name: "Shop", link: "shop" },
    { id: 2, name: "Product", link: "product" },
    { id: 3, name: "Contact Us", link: "contact" },
  ];

  const [toggle, setToggle] = useState(false);
  return (
    <header className="p-5">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center space-x-4">
            <div
              onClick={() => setToggle(!toggle)}
              className="lg:hidden cursor-pointer">
              {toggle ? (
                <XMarkIcon className="w-7 h-7" />
              ) : (
                <Bars3Icon className="w-7 h-7" />
              )}
            </div>
            <a href="/" className="text-2xl font-bold">
              Furniture<span className="text-slate-400 text-xl inline">.</span>
            </a>
          </div>

          <nav
            className={`flex flex-col space-y-4 absolute top-20 bg-zinc-100 p-10 w-full sm:w-2/3 lg:w-auto left-0 lg:relative lg:flex-row lg:top-0 lg:bg-transparent lg:p-0 lg:space-y-0 lg:space-x-8 duration-300 ${
              toggle ? "left-0" : "left-[-100%] lg:left-0"
            }`}>
            <div className="flex items-center w-full h-10 bg-white px-2 space-x-2 rounded border border-zinc-500 mb-4 lg:mb-0 lg:hidden">
              <MagnifyingGlassIcon className="w-7 h-7" id="search" />
              <input
                type="search"
                name="Search"
                id="search"
                className="w-full h-full outline-none border-none"
                placeholder="Search"
              />
            </div>
            <a href="/" className="font-medium">
              Home
            </a>
            {Links.map((link) => (
              <a
                href={link.link}
                key={link.id}
                className="text-zinc-500 hover:text-zinc-800 font-medium">
                {link.name}
              </a>
            ))}

            <button className="bg-zinc-900 h-12 text-white rounded hover:bg-white hover:text-zinc-900 shadow duration-300 lg:hidden">
              Sign In
            </button>

            <div className="flex items-center space-x-4 pt-5 lg:hidden">
              <img
                src="./images/facebook.png"
                alt="Image"
                className="h-6 object-contain"
              />
              <img
                src="./images/instagram.png"
                alt="Image"
                className="h-6 object-contain"
              />
              <img
                src="./images/youtube.png"
                alt="Image"
                className="h-6 object-contain"
              />
            </div>
          </nav>

          <div className="flex items-center space-x-2">
            <MagnifyingGlassIcon className="w-7 h-7" />
            <UserCircleIcon className="w-7 h-7" />
            <div className="flex items-center relative w-10 h-10">
              <ShoppingBagIcon className="w-7 h-7" />
              <span className="absolute w-5 h-5 bg-zinc-900 right-1 top-0 rounded-full text-white text-sm flex items-center justify-center">
                2
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
