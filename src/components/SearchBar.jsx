import React, { useRef } from "react";
import { fetchHeroes } from "../utils/utils";
const SearchBar = ({ setter }) => {
  let input = useRef("");

  async function handleClick(e) {
    e.preventDefault();
    let value = input.current.value;
    if (value === "") return;
    try {
      let heroes = await fetchHeroes(value);
      setter(heroes);
    } catch (err) {
      return console.error(err);
    }
  }
  return (
    <form action="">
      <input type="text" placeholder="Search Hero..." ref={input} />
      <button onClick={handleClick}>Search</button>
    </form>
  );
};

export default SearchBar;
