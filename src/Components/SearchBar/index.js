import React, { useEffect, useState } from "react";
import { HeaderSearchBar } from "../HeaderSearchBar";
import { MainSearchBar } from "../MainSearchBar";
import axios from "axios";

function SearchBar() {
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

  // useEffect(() => {
  //   getImages();
  // }, []);

  return (
    <React.Fragment>
      {activeSearch && search !== "" ? (
        <HeaderSearchBar
          search={search}
          setSearch={setSearch}
          getImages={getImages}
        />
      ) : (
        <MainSearchBar
          activeSearch={activeSearch}
          setActiveSearch={setActiveSearch}
          search={search}
          setSearch={setSearch}
          getImages={getImages}
        />
      )}
    </React.Fragment>
  );
}

export { SearchBar };