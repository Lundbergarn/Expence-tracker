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
        return state.forEach(amount => {
          if (amount.id === action.id) {
            return {
              title: action.money.title,
              amount: action.money.amount,
              incExp: action.money.incExp,
              id: action.id
            }
          }
        })
      }
    default:
      return state
  }
}