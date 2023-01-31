import React from "react";


function SearchedImage(props) {
  return (
    <picture>
      { /*<img src="https://www.eltiempo.com/files/image_640_428/uploads/2019/07/13/5d2a91a0d9344.jpeg" />*/ }
      <h1>{props.title}</h1>
      <p>wikipedia</p>
    </picture>
  );
}

export { SearchedImage };