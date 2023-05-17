import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import axios from "axios";
import { Link } from "react-router-dom";

const Postlist = ({ media }) => {
  const { _id, post, image } = media;
  const [love, setLove] = useState();

  const handleNumberChange = (event) => {
    setLove(event.target.value);
    setLove(love + 1);
  };

  const handleLove = (event) => {
    event.preventDefault();
    const form = event.target;
    const comment = form.comment.value;

    axios.post(`http://localhost:5000/post/${_id}`, { comment })

      .then((response) => {
        console.log(response.data);
        form.reset();
      })

      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="flex items-center justify-center my-5">
        <div className="w-full max-w-2xl py-8 flex flex-row items-center justify-center mx-auto bg-gray-50 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row w-3/4 md:w-5/6 space-x-0 md:space-x-8">
            <div className="w-full md:w-2/5 flex flex-col items-center justify-center">
              <figure className="w-1/2 md:w-full  rounded-full overflow-hidden">
                <img
                  src={image}
                  // src="https://plus.unsplash.com/premium_photo-1663054240347-39af30a5c291?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                ></img>
              </figure>
            </div>
            <form onSubmit={handleLove}>
              <div className="w-full md:w-3/5 space-y-4 flex flex-col justify-center items-start">
                <div className="flex flex-col justify-center">
                  <h1 className="text-center flex gap-2 md:text-left text-2xl font-bold text-green-600">
                    Post
                    <button
                      type="number"
                      value={love}
                      onClick={handleNumberChange}
                    >
                      <FcLike></FcLike>
                    </button>
                    <span>{love}</span>
                  </h1>
                  <span className="flex">
                    {post?.length > 8 ? (
                      <>
                        <p className="inline text-gray-400 font-normal text-start leading-6 w-full text-base">
                          {post.slice(0, 7) + ".."}{" "}
                        </p>
                        <button className="p-1 rounded text-[10px] bg-orange-700 w-32 text-white">
                          <Link to={`/details/${_id}`}>See Details</Link>
                        </button>
                      </>
                    ) : (
                      <p className="inline text-gray-400 font-normal text-start leading-6 w-full text-base">
                        {post}
                      </p>
                    )}
                  </span>
                </div>
                <textarea
                  type="text"
                  name="comment"
                  placeholder="Comment"
                  className="p-2 w-64 bg-green-100 border focusBorder border-green-600"
                >
                  {" "}
                </textarea>
                <button className="w-64 transition-colors bg-green-500 hover:bg-green-600 p-2 rounded-sm w-full text-white text-hover shadow-sm shadow-green-700">
                  Comment
                </button>
              </div>
            </form>
          </div>
          <div>{}</div>
        </div>
      </div>
    </div>
  );
};

export default Postlist;
