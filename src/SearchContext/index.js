import React, { useState } from "react";
import axios from "axios";

const SearchContext = React.createContext();
function SearchProvider (props){
    const [activeSearch, setActiveSearch] = useState(false);
  const [search, setSearch] = useState();
  const [images, setImages] = useState();

  const getImages = async () => {
    try {
      const res = await axios.get(
        `https://api.pexels.com/v1/search?query=${search}`,
        {
          headers: {
            Authorization:
              "563492ad6f91700001000001feb193d28b3846d69d14fca34d49387a",
          },
        }
      );
      setImages(res?.data?.photos);
      console.log(res?.data?.photos);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SearchContext.Provider value={{activeSearch, setActiveSearch, search, setSearch, images, setImages, getImages}}>{props.children}</SearchContext.Provider>
  )
}

export { SearchContext, SearchProvider };