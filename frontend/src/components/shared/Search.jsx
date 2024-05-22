import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../redux/slices/searchSlice";
import blackIcon from "../../assets/search-icon-black.png";
import whiteIcon from "../../assets/search-icon-white.png";
import { useState } from "react";

const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.feature.search);
  const [inputText, setInputText] = useState(search || "");
  const handleSearchChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSearchSubmit = () => {
    dispatch(setSearch({ search: inputText }));
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearchSubmit();
    }
  };
  return (
    <div className="flex items-center">
      <input
        type="text"
        value={inputText}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
        onBlur={handleSearchSubmit}
        placeholder="Search here"
        className="max-w-[300px] w-full h-[40px] p-4 rounded-l-xl border border-gray-500"
      />
      <button
        onBlur={handleSearchSubmit}
        onClick={handleSearchSubmit}
        className="group w-max h-[40px] hover:bg-black p-2 rounded-r-xl border border-gray-500"
      >
        <img
          className="w-7 h-6  group-hover:block hidden"
          src={whiteIcon}
          alt=""
        />
        <img
          className="w-7 h-6  group-hover:hidden block"
          src={blackIcon}
          alt=""
        />
      </button>
    </div>
  );
};

export default Search;
