import React from "react";
import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
  const getdetails = useLoaderData();
console.log(getdetails)
  return (
    <div>

      {getdetails.post}
    </div>
  );
};

export default PostDetails;
