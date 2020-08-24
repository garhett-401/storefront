import axios from 'axios'

const initialState = {
  categories: [],
  activeCategory: '',
}

// Reducers below
export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case 'CHANGECATEGORY':
      return { ...state, activeCategory: payload };
    case 'GETCATEGORIES':
      return {...state, categories: payload}
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

// Action Below

export const changeCat = (categoryName) => {
  return {
    type: 'CHANGECATEGORY',
    payload: categoryName,
  }
}

export const getCategories = () => async (dispatch, getState) => {
  const response = await axios.get('http://localhost:3001/categories');
  console.log(response)
  dispatch({
    type: 'GETCATEGORIES',
    payload: response.data,
  });
  console.log(response.data)
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}