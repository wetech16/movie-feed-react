import React from "react";
import { useApp } from "../hooks/useApp";

import Result from "./Result";

function Results() {
  const { state, openPopup } = useApp();
  return (
    <section className="results">
      {state.results.map((result) => (
        <Result
          key={result.imdbID}
          result={result}
          openPopup={openPopup}
        />
      ))}
    </section>
  );
}

export default Results;
