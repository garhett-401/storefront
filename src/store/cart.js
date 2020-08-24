const initialState = [];

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD':
      return [...state, payload]
    case 'DELETE':
      for(let i = 0; i < state.length; i++) {
        if(state[i].name === payload.name) {
          state.splice(i, 1);
        }
        return [...state];
      }
      return state;
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export const addItem = (item) => {
  return {
    type: 'ADD',
    payload: item
  }
}

export const deleteItem = (item) => {
  return {
    type: 'DELETE',
    payload: item
  }
}