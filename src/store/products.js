import axios from 'axios';

const initialState = [];

export default (state = initialState, action) => {
  const {type, payload} = action;
  
  switch (type) {
    case 'FILTER': 
      let filteredProducts = [];
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].category === payload) {
          filteredProducts.push(state.products[i]);
        }
        return {...state, products: filteredProducts}
      }
    case 'GET_PRODUCTS':
      return payload;
    default:
      return state;
  }
}

export const getProducts = () => async (dispatch, getState) => {
  const res = await axios.get('http://localhost:3001/products');
  dispatch({
    type: 'GET_PRODUCTS',
    payload: res.data,
  })
}

export const filter = (catName) => {
  return {
    type: 'FILTER',
    payload: catName,
  }
}