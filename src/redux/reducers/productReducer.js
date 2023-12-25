import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  products: [],
  product: {},
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, product: payload };
    default:
      return state;
  }
};
