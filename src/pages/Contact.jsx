import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        {/* снимката и текста застават едно до друго */}
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-5">
          <p className="font-semibold text-lg text-gray-600">
            Our Office Administration
          </p>
          <p className="text-gray-500">
            45 Kapitan Raycho St., Plovdiv, 4000 <br /> Bulgaria
          </p>
          <p className="text-gray-500">
            Tel: (+359) 555-0130 <br /> Email: fixbuddies@gmail.com
          </p>
          <p className="font-semibold text-lg text-gray-600">
            Careers at FixBuddy
          </p>
          <p className="text-gray-500">
            Learn more about our team and job openings
          </p>
          <button className="border border-black rounded-full px-8 py-4 text-sm hover:bg-primary hover:text-white transition-all duration-500">
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
