import { combineReducers } from "redux";

import products from "./products";
const counter = combineReducers({
  products,
});

export default counter;
