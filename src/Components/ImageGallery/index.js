import React, { useContext } from "react"
import { SearchContext } from "../../SearchContext";
import "./styles.css"



function ImageGallery(props) {
 const { images } = useContext(SearchContext);
  return (
    <React.Fragment>
      <div className="Images-Container">
        {images?.map((image, index) => (
        <img src={image?.src?.small} key={index}/> 
        ))}
      </div>
        
    </React.Fragment>
  );
}

export { ImageGallery };