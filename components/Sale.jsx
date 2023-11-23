import React from "react";

function Sale() {
  return (
    <section className="my-20 px-5">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <img
            src="./images/sale-img.png"
            alt="Image"
            className="w-full md:h-[520px] object-cover"
          />

          <div className="bg-slate-100 px-10 sm:px-20 py-24 lg:h-[520px] flex flex-col justify-center space-y-5">
            <h3 className="text-blue-500 font-medium">SALE UP TO 35% OFF</h3>
            <h2 className="text-3xl md:text-4xl">
              HUNDREDS of <br />
              New lower prices!
            </h2>
            <p className="text-base md:text-lg">
              It's more affordable than ever to give every room in your home a
              stylish makeover
            </p>
            <button
              type="button"
              className="w-48 h-10 bg-black/90 text-white rounded shadow hover:bg-white hover:text-black">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sale;
