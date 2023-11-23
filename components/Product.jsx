import { HeartIcon, StarIcon } from "@heroicons/react/24/solid";
import React from "react";

function Product() {
  const cards = [
    {
      id: 1,
      cImg: "./images/c1.png",
      cAlt: "Card Image",
      cNew: "New",
      cPerenct: "-50%",
      cText: "Loveseat Sofa",
      cDollar: "$199.00",
      cDel: "$400.00",
    },
    {
      id: 2,
      cImg: "./images/c2.png",
      cAlt: "Card Image",
      cNew: "New",
      cPerenct: "-50%",
      cText: "Table Lamp",
      cDollar: "$24.99",
    },
    {
      id: 3,
      cImg: "./images/c3.png",
      cAlt: "Card Image",
      cNew: "New",
      cPerenct: "-50%",
      cText: "Beige Table Lamp",
      cDollar: "$24.99",
    },
    {
      id: 4,
      cImg: "./images/c4.png",
      cAlt: "Card Image",
      cNew: "New",
      cPerenct: "-50%",
      cText: "Bamboo basket",
      cDollar: "$24.99",
    },
    {
      id: 5,
      cImg: "./images/c5.png",
      cAlt: "Card Image",
      cNew: "New",
      cPerenct: "-50%",
      cText: "Toasted",
      cDollar: "$24.99",
    },
  ];
  return (
    <section className="my-10 px-5">
      <div className="max-w-screen-xl mx-auto space-y-5">
        <h2 className="text-black font-medium text-2xl sm:text-4xl lg:text-5xl">
          New Arrivals
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {cards.map((card) => (
            <div className="bg-slate-100" key={card.id}>
              <div className="relative h-96 group">
                <img
                  src={card.cImg}
                  alt={card.cAlt}
                  className="h-96 object-contain border w-full"
                />
                <div className="absolute top-5 left-5 w-full flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h3 className="bg-white w-16 h-6 text-center rounded font-bold text-base">
                      {card.cNew}
                    </h3>
                    <h3 className="bg-green-400 w-16 h-6 text-center rounded font-bold text-base text-neutral-100">
                      {card.cPerenct}
                    </h3>
                  </div>
                  <div className="hidden group-hover:block">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow absolute right-10 top-0">
                      <HeartIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="bg-zinc-950 text-neutral-100 text-sm h-10 left-5 right-5 rounded absolute bottom-5 hover:shadow hover:bg-white hover:text-black duration-300 hidden group-hover:block">
                  Add to cart
                </button>
              </div>

              <div className="p-4">
                <div className="flex items-center space-x-1">
                  <StarIcon className="w-5 text-neutral-900" />
                  <StarIcon className="w-5 text-neutral-900" />
                  <StarIcon className="w-5 text-neutral-900" />
                  <StarIcon className="w-5 text-neutral-900" />
                  <StarIcon className="w-5 text-neutral-900" />
                </div>
                <h4 className=" font-semibold">{card.cText}</h4>
                <div className="flex items-center space-x-2">
                  <h3 className="text-base font-semibold">{card.cDollar}</h3>
                  <del className="text-zinc-400">{card.cDel}</del>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Product;
