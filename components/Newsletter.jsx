import { EnvelopeIcon } from "@heroicons/react/24/outline";
import React from "react";

function Newsletter() {
  return (
    <section className="px-5 bg-[url('./images/newsletter.png')] bg-cover bg-center h-96">
      <div className="max-w-screen-sm mx-auto">
        <div className="py-28 space-y-2 text-center">
          <h2 className="font-medium text-3xl sm:text-4xl">
            Join Our Newsletter
          </h2>
          <p>Sign up for deals, new products and promotions</p>
          <div className="flex items-center border-b border-black h-10 space-x-1">
            <EnvelopeIcon className="w-6 h-6" />
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              className="w-full h-full outline-none border-none bg-transparent pl-4 placeholder:text-sm"
              placeholder="Email address"
            />
            <button className="w-32">Sign Up</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
