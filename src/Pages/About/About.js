/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const About = () => {
  return (
    <>
      <div className="container h-screen max-w-full">
        <div className="m-auto my-28 w-96 max-w-lg items-center justify-center overflow-hidden rounded-2xl bg-slate-200 shadow-xl">
          <div className="h-24 bg-white"></div>
          <div className="-mt-20 flex justify-center">
            <img
              className="h-32 rounded-full"
              src="https://avatars.githubusercontent.com/u/76113796?v=4"
            />
          </div>
          <div className="mt-5 mb-1 px-3 text-center text-lg">
            Dipayan Ghose
          </div>
          <div className="mb-5 px-3 text-center text-sky-500">
            East West University
          </div>
          <blockquote>
            <p className="mx-2 mb-7 text-center text-base">
              ghosedipayen@gmail.com
            </p>
            <p className="mx-2 mb-7 text-center text-base">
              Block-C, Banasree, Dhaka
            </p>
          </blockquote>
        </div>
      </div>
    </>
  );
};

export default About;
