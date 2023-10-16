import React, { useContext, useState } from "react";
import Loader from "../common/loader";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { loading, mobileMenu, setMobileMenu } = useContext(Context);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };

  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between px-4 bg-white h-14 md:px-5 dark:bg-black">
      {loading && <Loader />}
      <div className="flex items-center h-5 text-black"></div>
    </div>
  );
};

export default Header;
