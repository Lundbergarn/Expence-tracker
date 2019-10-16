import React, { useContext } from 'react';
import { AmountContext } from '../contexts/AmountContext';
import AmountDetails from './AmountDetails';

const AmountList = () => {
  const { amounts } = useContext(AmountContext);

  const totalAmount = () => {
    let total = 0;
    let inc = amounts.map((acc) => {
      if (acc.incExp === '+') {
        return total += parseInt(acc.amount);
      } else {
        return total -= parseInt(acc.amount);
      }
    })
    return <>{total}</>
  }

  return amounts.length ? (
    <div className="amount__list">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Balance</th>
            <th>Total amount</th>
          </tr>
        </thead>
        <tbody>
          <tr style={totalAmount().props.children >= 0 ? { background: "#46af15" } : { background: "#d93436" }}>
            <td></td>
            <td>{totalAmount().props.children >= 0 ? '+' : '-'}</td>
            <td>{totalAmount()}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>Type</th>
            <th>Expence / Income</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {amounts.map(amount => {
            return (<AmountDetails amount={amount} key={amount.id} />);
          })}
        </tbody>
      </table>
    </div>
  ) : (
      <div className="empty"> No Amounts to read </div>
    )
};

export default AmountList;
