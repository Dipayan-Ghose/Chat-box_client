import React from "react";

const SectionTwo = ({ two }) => {
  const { post, comment, love } = two;
  return (
    <div>
      <div className="card w-64 p-5 flex items-center justify-center my-5 mx-auto">
        <form>
          <div className="w-full  space-y-4 flex flex-col justify-center items-start">
            <div className="flex flex-col justify-center">
              <h1 className="text-center flex gap-2 md:text-left text-2xl font-bold text-green-500">
                Love React:
                <span>{love}</span>
              </h1>
              <span className="flex">
                <p className="inline text-green-500 font-normal text-start leading-6 w-full text-base">
                  Post: {post}
                </p>
              </span>
            </div>
            <p className="inline text-green-500 font-normal text-start leading-6 w-full text-base">
              Comment:{comment}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SectionTwo;
