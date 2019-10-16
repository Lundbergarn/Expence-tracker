import React, { useContext } from 'react';
import { AmountContext } from '../contexts/AmountContext';

const AmountDetails = ({ amount }) => {
  const { dispatch } = useContext(AmountContext);
  return (
    <tr
      className="amount__item"
      style={amount.incExp === '-' ? { background: "#d93436" } : { background: "#46af15" }}
      onClick={() => dispatch({ type: 'REMOVE_AMOUNT', id: amount.id })}
    >
      <td>{amount.title}</td>
      <td>{amount.incExp}</td>
      <td>{amount.amount}</td>
    </tr>
  );
};

export default AmountDetails;
