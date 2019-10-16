import React, { createContext, useReducer } from 'react';
import { amountReducer } from '../reducers/amountReducer';

export const AmountContext = createContext();

const AmountContextProvider = (props) => {
  const [amounts, dispatch] = useReducer(amountReducer, [
    { title: 'Sålde min bil', amount: 10000, incExp: '+', id: 1 },
    { title: 'test', amount: 10, incExp: '-', id: 2 },
    { title: 'Lön', amount: 20000, incExp: '+', id: 3 },
    { title: 'Handla mat', amount: 400, incExp: '-', id: 4 }
  ]);

  return (
    <AmountContext.Provider value={{ amounts, dispatch }}>
      {props.children}
    </AmountContext.Provider>
  )
};

export default AmountContextProvider;
