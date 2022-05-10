export const userReducer = (state, action) => {
  switch (action.type) {
    case 'login':
      return { ...state, user: { name: action.payload } }
    case 'logout':
      return { ...state, user: null }
    default:
      return state
  }
}
