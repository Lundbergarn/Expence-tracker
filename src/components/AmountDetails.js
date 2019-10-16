import React, { useContext } from 'react';
import { AmountContext } from '../contexts/AmountContext';

const AmountDetails = ({ amount }) => {
  const { dispatch } = useContext(AmountContext);
  return (
    <tr
      className="amount__item"
      style={amount.incExp === '-' ? { background: "#d93436" } : { background: "#46af15" }}
    >
      <td>{amount.title}</td>

      <td style={{ fontSize: '1.6rem', lineHeight: '1rem' }}>
        {amount.incExp}
      </td>

      <td>{amount.amount}</td>

      <td className="center">
        <i class="material-icons">edit</i>
      </td>

      <td
        className="center"
        onClick={() => dispatch({ type: 'REMOVE_AMOUNT', id: amount.id })}
      >
        <i class="material-icons">clear</i>
      </td>

    </tr>
  );
};

export default AmountDetails;
