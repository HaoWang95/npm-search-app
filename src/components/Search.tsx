import React, { useState } from "react";
import { useActions } from "../hooks/useActions";

const Search: React.VFC = () => {
  const [term, setTerm] = useState<string>("");

  const {searchRepositories} = useActions();
    
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={term} onChange={onInputChange} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
