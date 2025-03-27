import Image from "next/image";
import React from "react";
const Page = () => {
  return (
    // <div className="flex justify-stretch">
    //   {/* <div
    //     className="hero min-h-screen bg-no-repeat "
    //     style={{
    //       backgroundImage:
    //         "url(https://leadorigin.com/wp-content/uploads/2024/05/Group-49015-1024x800.webp)",
    //     }}
    //   >
    //     <div className=" hero-content text-neutral-content text-center">
    //       <div className="max-w-md">
    //         <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
    //         <p className="mb-5">To Lead Your Business for Growth</p>
    //         <button className="btn btn-primary">Get Started</button>
    //       </div>
    //     </div>
    //   </div> */}
    //  </div>
    <div>
      <div className="hero bg-base-200 min-h-screen ">
        <div className="hero-content flex bg-blue-900">
          <div className="pt-10 w-100 flex-col">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <div className="bg-amber-700">
            <img
              src="https://leadorigin.com/wp-content/uploads/2024/05/Group-49015-1024x800.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
