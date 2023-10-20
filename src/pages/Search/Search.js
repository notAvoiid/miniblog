import React from "react";

import { useFetchDocuments } from "../../hooks/useFetchDocument";
import { useQuery } from "../../hooks/useQuery";

const Search = () => {
  const query = useQuery();
  const search = query.get('q');
  
  return <div>
    <h2>Pesquisar</h2>
    <p>{search}</p>
  </div>
};

export default Search;