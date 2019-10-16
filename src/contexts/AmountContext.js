import React, { createContext, useReducer } from 'react';
import { amountReducer } from '../reducers/amountReducer';

export const AmountContext = createContext();

const AmountContextProvider = (props) => {
  const [amounts, dispatch] = useReducer(amountReducer, []);

  return (
    <AmountContext.Provider value={{ amounts, dispatch }}>
      {props.children}
    </AmountContext.Provider>
  )
};

export default AmountContextProvider;
