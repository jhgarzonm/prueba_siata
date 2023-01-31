import React, { useContext } from "react"
import { SearchedImage } from "../SearchedImage";
import { SearchBar } from "../SearchBar";
import { SearchContext } from "../../SearchContext";



function ImageGallery(props) {
 const { images } = useContext(SearchContext);
  return (
    <React.Fragment>
        {images?.map((image, index) => (
         <img src={image?.src?.small} key={index}/> 
       ))} 
    </React.Fragment>
  );
}

export { ImageGallery };