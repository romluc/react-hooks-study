export const numberReducer = (state, action) => {
  switch (action.type) {
    case 'login':
      return { ...state, user: { name: action.payload } }
    case 'logout':
      return { ...state, user: null }
    case 'addNumber':
      return { ...state, number: state.number + action.payload }
    case 'divNumberBy25':
      return { ...state, number: state.number / 25 }
    case 'numberTimes7':
      return { ...state, number: state.number * 7 }
    case 'numberInt':
      return { ...state, number: parseInt(state.number) }
    default:
      return state
  }
}
