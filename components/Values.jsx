import React from "react";

function Values() {
  const valueCards = [
    {
      id: 1,
      vImg: "./images/v1.png",
      vAlt: "Image",
      vHeading: "Free Shipping",
      vText: "Order above $200",
    },
    {
      id: 2,
      vImg: "./images/v2.png",
      vAlt: "Image",
      vHeading: "Money-back",
      vText: "30 days guarantee",
    },
    {
      id: 3,
      vImg: "./images/v3.png",
      vAlt: "Image",
      vHeading: "Secure Payments",
      vText: "Secured by Stripe",
    },
    {
      id: 4,
      vImg: "./images/v4.png",
      vAlt: "Image",
      vHeading: "24/7 Support",
      vText: "Phone and Email support",
    },
  ];
  return (
    <section className="my-20 px-5">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {valueCards.map((value) => (
            <div
              key={value.id}
              className="bg-slate-100 p-5 space-y-2 flex items-center flex-col">
              <img
                src={value.vImg}
                alt={value.vAlt}
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-lg sm:text-xl font-bold">{value.vHeading}</h3>
              <h5>{value.vText}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Values;
