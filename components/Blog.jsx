import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";

function Blog() {
  const cards = [
    {
      id: 1,
      aImg: "./images/a1.png",
      aAlt: "Card Image",
      aHeading: "7 ways to decor your home",
      aBtn: "Read More",
    },
    {
      id: 2,
      aImg: "./images/a2.png",
      aAlt: "Card Image",
      aHeading: "Kitchen organization",
      aBtn: "Read More",
    },
    {
      id: 3,
      aImg: "./images/a3.png",
      aAlt: "Card Image",
      aHeading: "Decor your bedroom",
      aBtn: "Read More",
    },
  ];
  return (
    <section className="my-20 px-5">
      <div className="max-w-screen-xl mx-auto space-y-5">
        <h2 className="text-black font-medium text-2xl sm:text-4xl lg:text-5xl">
          Articles
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cards.map((card) => (
            <div key={card.id} className="space-y-1">
              <img
                src={card.aImg}
                alt={card.aAlt}
                className="w-full sm:h-96 md:h-auto object-cover"
              />
              <h3 className="text-lg font-medium">{card.aHeading}</h3>
              <div className="inline-flex items-center space-x-1 border-b-2 border-black">
                <p>{card.aBtn}</p>
                <ArrowRightIcon className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
