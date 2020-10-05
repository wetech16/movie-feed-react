import React, { useState } from "react";
import axios from "axios";
const apiurl = "http://www.omdbapi.com/?apikey=dfe6d885";

export const useApp = () => {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });

  const handleInput = (e) => {
    const s = e.target.value;
    setState({ ...state, s: s });
  };

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  const openPopup = (id) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return { state, handleInput, search, openPopup, closePopup };
};
