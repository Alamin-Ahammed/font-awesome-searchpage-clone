import React, { useState } from "react";
import SearchBar from "../../Sections/SearchBar/SearchBar";
import FeaturedMenu from '../../Sections/FeaturedMenu/FeaturedMenu'
import DisplayIcons from "../../Sections/DisplayIcons/DisplayIcons";

export default function Search() {
  const [isFilterBoxOfDisplayCliked,setIsFilterBoxOfDisplayCliked] = useState(false);
  const handlefilterBoxOfDisplaySection = ()=> {
    setIsFilterBoxOfDisplayCliked(!isFilterBoxOfDisplayCliked);
  }
  return (
    <>
      <SearchBar />
      <FeaturedMenu handlefilterBoxOfDisplaySection={handlefilterBoxOfDisplaySection} />
      <DisplayIcons isFilterBoxOfDisplayCliked={isFilterBoxOfDisplayCliked} />
    </>
  );
}
