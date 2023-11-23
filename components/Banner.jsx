import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

function Banner() {
  return (
    <section className="my-10 px-5">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 md:grid-rows-2 gap-4">
          <div className="relative row-span-2">
            <img src="./images/b1.png" alt="Image" className="w-full" />
            <div className="absolute top-10 left-10 space-y-2">
              <h3 className="text-2xl font-medium">Living Room</h3>
              <div className="flex items-center underline space-x-2 cursor-pointer">
                <button type="button" className="font-medium">
                  Show Now
                </button>
                <ArrowRightIcon className="h-5" />
              </div>
            </div>
          </div>

          <div className="relative">
            <img src="./images/b2.png" alt="Image" className="w-full h-full" />
            <div className="absolute bottom-10 left-10 space-y-2">
              <h3 className="text-2xl font-medium">Bedroom</h3>
              <div className="flex items-center underline space-x-2 cursor-pointer">
                <button type="button" className="font-medium">
                  Show Now
                </button>
                <ArrowRightIcon className="h-5" />
              </div>
            </div>
          </div>

          <div className="relative">
            <img src="./images/b3.png" alt="Image" className="w-full h-full" />
            <div className="absolute bottom-10 left-10 space-y-2">
              <h3 className="text-2xl font-medium">Kitchen</h3>
              <div className="flex items-center underline space-x-2 cursor-pointer">
                <button type="button" className="font-medium">
                  Show Now
                </button>
                <ArrowRightIcon className="h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
