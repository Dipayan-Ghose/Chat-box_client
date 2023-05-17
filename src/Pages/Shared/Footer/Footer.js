/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = () => {
  return (
    <footer class="px-4 py-12 mx-auto w-full  bg-green-400">
      <div class="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-11 lg:gap-20">
        <div class="col-span-3">
        <a href="" className="text-2xl font-bold text-red-600">
                Chat <span className="text-orange-500">Box</span>
              </a>
          <p className="text-xl mt-2 font-semibold">Unlimited Sharing Platform</p>
          
        </div>
        <nav class="col-span-1 md:col-span-1 lg:col-span-2">
          <p class="mb-3 text-xs font-semibold tracking-wider text-green-800 uppercase">
            Product
          </p>
          <a
            class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-green-800"
            href="#"
          >
            Features
          </a>
          <a
            class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-green-800"
            href="#"
          >
            Pricing
          </a>
          <a
            class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-green-800"
            href="#"
          >
            Feedback
          </a>
          <a
            class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-green-800"
            href="#"
          >
            FAQs
          </a>
        </nav>
        <nav class="col-span-2 md:col-span-1 lg:col-span-2">
          <p class="mb-3 text-xs font-semibold tracking-wider text-green-800 uppercase">
            Support
          </p>
          <a
            class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-green-800"
            href="#"
          >
            Chat
          </a>
          <a
            class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-green-800"
            href="#"
          >
            {" "}
            Email Support{" "}
          </a>
          <a
            class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-green-800"
            href="#"
          >
            GDPR
          </a>
          <a
            class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-green-800"
            href="#"
          >
            {" "}
            Help{" "}
          </a>
        </nav>
        <nav class="col-span-1 md:col-span-1 lg:col-span-2">
          <p class="mb-3 text-xs font-semibold tracking-wider text-green-800 uppercase">
            Resources
          </p>
          <a
            class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-green-800"
            href="#"
          >
            Blog
          </a>
          <a
            class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-green-800"
            href="#"
          >
            {" "}
            Twitter{" "}
          </a>
          <a
            class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-green-800"
            href="#"
          >
            Alternatives
          </a>
          <a
            class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-green-800"
            href="#"
          >
             Vote
          </a>
        </nav>
        <nav class="col-span-1 md:col-span-1 lg:col-span-2">
          <p class="mb-3 text-xs font-semibold tracking-wider text-green-800 uppercase">
            Company
          </p>
          <a
            class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-green-800"
            href="#"
          >
            About Us
          </a>
          <a
            class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-green-800"
            href="#"
          >
            Privacy
          </a>
          <a
            class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-green-800"
            href="#"
          >
            Terms
          </a>
          <a
            class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-green-800"
            href="#"
          >
            Status
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
