import { types } from "../types/todos";

const initState = [
  {id: 'none', name: 'Learn', status: true}
]
const todos = (state=initState, action) => {
  switch(action.type) {
    case types.ADD_TODO:
      return [...state, action.payload];
    case types.DONE_TODO: 
      return [...action.payload]
    default:
      return state;
  }
}

export default todos;