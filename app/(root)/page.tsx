"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
const Page = () => {
  return (
    <div>
      <section className="bg-white lg:grid lg:min-h-screen lg:place-content-center dark:bg-[#022641] ">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
          <div className="max-w-prose text-left">
            <div className="text-[#0083d8] font-bold text-2xl sm:text-5xl w-100 ">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Web Development",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Social Media",
                  1000,
                  "Paid Ads",
                  1000,
                  "Everything",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  display: "inline-block",
                }}
                repeat={Infinity}
              />
            </div>

            <h1 className="font-extrabold text-[55px] text-white  ">
              To Lead Your Business for Growth
            </h1>
          </div>

          {/* <!-- Responsive Image --> */}
          <div className="mt-6 md:mt-0 sm:p-10">
            <img
              className="w-full h-auto max-w-full  object-cover md:h-[400px] lg:h-[500px]"
              src="https://leadorigin.com/wp-content/uploads/2024/05/Group-49015-1024x800.webp"
              alt="Any Image Here"
            />
          </div>
        </div>
      </section>

      <h1>fafas</h1>
    </div>
  );
};

export default Page;
