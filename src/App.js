import React, { useState } from "react";

import Search from "./components/Search";
import Results from "./components/Results";
import Popup from "./components/Popup";
import { useApp } from "./hooks/useApp";

function App() {
  const {
    state,
    handleInput,
    search,
    openPopup,
    closePopup,
  } = useApp();

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />

        <Results results={state.results} openPopup={openPopup} />

        {state.selected.Title && (
          <Popup selected={state.selected} closePopup={closePopup} />
        )}
      </main>
    </div>
  );
}

export default App;
