export const amountReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_AMOUNT':
      return [...state, {
        title: action.money.title,
        amount: action.money.amount,
        incExp: action.money.incExp,
        id: Math.random()
      }]
    case 'REMOVE_AMOUNT':
      return state.filter(amount => amount.id !== action.id)
    case 'UPDATE_AMOUNT':
      {
        let updatedList = state.map(amount => {
          if (amount.id === action.money.id) {
            amount.title = action.money.title;
            amount.amount = action.money.amount;
          }
          return amount;
        })
        return [...updatedList]
      }
    default:
      return state
  }
}