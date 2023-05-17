import React from "react";
import { useLoaderData } from "react-router-dom";
import Postlist from "./Postlist";

const Media = () => {
  const getMedia = useLoaderData();

  return (
    <div className="grid grid-cols-1 gap-8">
      {getMedia.map((media) => (
        <Postlist key={media._id} media={media}></Postlist>
      ))}
    </div>
  );
};

export default Media;
