import { combineReducers } from "redux";
import products from "./products";
import filters from "./filters";

const rootReducer = combineReducers({
  products,
  filters
});

export default rootReducer;
