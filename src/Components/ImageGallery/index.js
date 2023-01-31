import React from "react";
import { SearchedImage } from "../SearchedImage";
import { SearchBar } from "../SearchBar";

function ImageGallery(props) {
  const images = props?.images;
  return (
    <React.Fragment>
      {images.map((image, index) => (
        <SearchedImage
          key={index}
          image={image}
        />
      ))}
    </React.Fragment>
  );
}

export { ImageGallery };