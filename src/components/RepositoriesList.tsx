import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Search from "./Search";

const RepositoriesList: React.VFC<{}> = () => {
  const {data, error, loading} = useTypedSelector((state) => state.repositories);

  return (
    <div>
      <h2>Search for a package!</h2>
      <Search />
      {error && <h4>{error}</h4>}
      {loading && <h4>Loading...</h4>}
      {!error && !loading && data.map(item => {
        return (<div key={item}>{item}</div>)
      })}
    </div>
  );
};

export default RepositoriesList;
