import React, { useContext, useState, useEffect } from 'react';
import { AmountContext } from '../contexts/AmountContext';

const AmountForm = (props) => {
  const { dispatch } = useContext(AmountContext);
  const [title, setTitle] = useState(props.update.title || '');
  const [amount, setAmount] = useState(props.update.amount || '');
  const [incExp, setIncExp] = useState('-');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_AMOUNT', money: { title, amount, incExp } })
    setTitle('');
    setAmount('');
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_AMOUNT', money: { title, amount, id: props.update.id } })
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
          <span style={{ fontSize: '1.6rem' }}> - </span>
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
          <span style={{ fontSize: '1.6rem' }}> + </span>
        </label>
      </div>

      <input onClick={handleSubmit} type="submit" value="Add amount" />
      <input onClick={handleUpdate} type="submit" value="Add update" />
    </form>
  )
};

export default AmountForm;
