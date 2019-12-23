/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useReducer, createContext, useContext } from 'react';
import reducer, { initialState } from './reducer';

const AppContext = createContext(initialState);

// useStore will be used in React components to fetch and mutate state
export const useAppStore = () => useContext(AppContext);

export default function AppProvider({ children }) {
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ store, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
