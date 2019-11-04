import { SET } from "@/store/actionTypes/prefixes";
import { FILTER } from "@/store/actionTypes/names";

const initialState = {
  list: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case `${SET}${FILTER}`:
      return { ...state, list: action.payload };

    default:
      return state;
  }
}
