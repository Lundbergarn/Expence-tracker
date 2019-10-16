import React, { useContext, useState } from 'react';
import { AmountContext } from '../contexts/AmountContext';

const AmountForm = () => {
  const { dispatch } = useContext(AmountContext);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [incExp, setIncExp] = useState('-');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_AMOUNT', money: { title, amount, incExp } })
    setTitle('');
    setAmount('');
  }

  return (
    <form>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <div className="radio">
        <label>
          <input
            type="radio"
            value="-"
            onChange={(e) => setIncExp(e.target.value)}
            checked={incExp === '-'}
          />
          <span>-</span>
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="+"
            onChange={(e) => setIncExp(e.target.value)}
            checked={incExp === '+'}
          />
          <span>+</span>
        </label>
      </div>

      <input onClick={handleSubmit} type="submit" value="Add amount" />
    </form>
  )
};

export default AmountForm;
