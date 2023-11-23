import React from "react";

function Footer() {
  const Links = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Shop", link: "/" },
    { id: 3, name: "Product", link: "/" },
    { id: 4, name: "Blog", link: "/" },
    { id: 5, name: "Contact Us", link: "/" },
  ];
  return (
    <footer className="bg-neutral-900">
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="py-16 flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center md:space-x-20 space-y-2">
            <a href="/" className="text-2xl font-bold text-white">
              Furniture<span className="text-slate-400 text-xl inline">.</span>
            </a>
            <h5 className="text-white font-thin relative before:absolute md:before:h-6 md:before:w-[0.5px] md:before:left-[-25%] before:bg-neutral-400">
              Gift & Decoration Store
            </h5>
          </div>

          <div className="md:space-x-5 flex flex-col items-center md:flex-row space-y-5 md:space-y-0">
            {Links.map((footerLink) => (
              <a
                href={footerLink.link}
                key={footerLink.id}
                className="text-white">
                {footerLink.name}
              </a>
            ))}
          </div>
        </div>

        <div className="text-white flex flex-col md:flex-row md:justify-between items-center border-t py-5 space-y-5 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-x-4">
            <h4 className="text-white/80">Copyright &copy; 2023. All rights reserved</h4>
            <ul className="flex justify-center items-center space-x-4">
              <li className="list-none">Privacy Policy</li>
              <li className="list-none">Terms of Use</li>
            </ul>
          </div>
          <a href="/">Vadlamudi Vamsi</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
