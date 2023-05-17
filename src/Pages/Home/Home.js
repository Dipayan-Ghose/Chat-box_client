/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import "./Home.css";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import SectionTwo from "./SectionTwo";

const Home = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const sectionTwo= useLoaderData();
  

  function handleChange(event) {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);

    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(selectedImage);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const post = form.post.value;
    const image = form.image.value;

    const sendMedia = {
      post,
      image,
    };
    fetch("https://media-server-nine.vercel.app/post", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sendMedia),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Successfully post added");
          form.reset();
          setImage(null);
          setImagePreview(null);
        }
      })
      .catch((er) => console.log(er));
  };

  return (
    <div className="mx-3">
      <form onSubmit={handleSubmit}>
        <div className="max-w-2xl my-3 mx-auto">
          <label
            for="message"
            className="block my-2 text-start text-xl font-medium text-green-600 "
          >
            Post Anything
          </label>
          <textarea
            id="message"
            rows="4"
            name="post"
            className="block p-2.5 w-full text-sm text-green-900 bg-green-50 rounded-lg border border-green-200 focusBorder focus:border-green-400 hover:border-green-400"
            placeholder="Your post..."
            required
          ></textarea>
        </div>
        <div>
          <p
            for="image"
            className="mt-8 max-w-2xl mx-auto text-start text-xl font-medium text-green-600 "
          >
            Upload Image
          </p>
          <div className="w-full h-full flex">
            <div className="extraOutline p-4 bg-white w-max m-auto rounded-lg">
              <div className="file_upload p-5 relative border-4 border-dotted border-green-200 rounded-lg">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Image preview"
                    className="h-32 w-40 object-cover mb-2 rounded "
                  />
                ) : (
                  <svg
                    className="text-green-500 w-24 mx-auto mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                )}

                {/* <svg
                  className="text-green-500 w-24 mx-auto mb-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg> */}

                <div className="input_field flex flex-col w-max mx-auto text-center">
                  <label>
                    <input
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      name="image"
                      accept="image/*"
                      onChange={handleChange}
                      required
                    />
                    <div className="text w-32 bg-green-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-green-500">
                      Select Image
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="btn p-2 w-72 my-5 mx-auto bg-green-500 text-white "
          >
            Submit
          </button>
        </div>
      </form>
<hr className="p-[2px] my-5 max-w-xl mx-auto bg-green-800 m-2"></hr>
     <div>
      {sectionTwo.map(two=><SectionTwo key={two._id} two={two}></SectionTwo>)}
     </div>
    </div>
  );
};

export default Home;
