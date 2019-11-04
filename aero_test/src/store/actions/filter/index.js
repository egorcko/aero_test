import { SET } from "@/store/actionTypes/prefixes";
import { FILTER } from "@/store/actionTypes/names";

export default function setFilter(payload) {
  return {
    type: `${SET}${FILTER}`,
    payload
  };
}
