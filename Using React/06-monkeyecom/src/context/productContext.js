// steps to create/setup a context API
// import a context
// create a context
// create a provider
// create a consumer

import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/productReducer";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const API = "https://api.pujakaitem.com/api/products";
  const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featured: [],
  };

  const { state, dispatch } = useReducer(reducer, initialState);

  const getProduct = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await axios.get(url); //return promise
      const products = await response.data;
      dispatch({ type: "SET_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "SET_ERROR" });
    }
  };

  useEffect(() => {
    getProduct(API);
  });

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

// custom hook
const useGlobalProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalProductContext };
