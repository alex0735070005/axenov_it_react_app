/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useReducer, createContext, useContext } from 'react';
import reducer, { initialState } from './reducer';

const UsersContext = createContext(initialState);

// useStore will be used in React components to fetch and mutate state
export const useUsersStore = () => useContext(UsersContext);

export const UsersProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <UsersContext.Provider value={{ store, dispatch }}>
      {children}
    </UsersContext.Provider>
  );
};

export default function connect(Component) {
  return props => (
    <UsersProvider>
      <Component {...props} />
    </UsersProvider>
  );
}
