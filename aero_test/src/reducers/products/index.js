import { LOAD, UPDATE } from "@/store/actionTypes/prefixes";
import { SUCCESS, FAIL, START } from "@/store/actionTypes/postfixes";
import { PRODUCTS } from "@/store/actionTypes/names";

const initialState = {
  isLoading: false,
  isLoaded: false,
  list: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case `${LOAD}${PRODUCTS}${START}`:
      return { ...state, isLoading: true, isLoaded: false };

    case `${LOAD}${PRODUCTS}${SUCCESS}`:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        list: action.payload
      };

    case `${LOAD}${PRODUCTS}${FAIL}`:
      return { ...state, isLoading: false, isLoaded: true };

    case `${UPDATE}${PRODUCTS}`:
      return { ...state, list: action.payload };

    default:
      return state;
  }
}
