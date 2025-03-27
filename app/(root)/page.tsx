"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
const Page = () => {
  return (
    <div>
      <div className="hero flex bg-base-200  bg-[#022641] justify-evenly  ">
        <div className="text-[#0083d8] font-extrabold pt-10 w-100 ">
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
              fontSize: "3em",
              display: "inline-block",
            }}
            repeat={Infinity}
          />
          <h1 className="text-center text-[55px] text-white  ">
            To Lead Your Business for Growth
          </h1>
        </div>
        <div className=" w-auto bg-auto ">
          <img
            src="https://leadorigin.com/wp-content/uploads/2024/05/Group-49015-1024x800.webp"
            className="w-full rounded-lg bg-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
