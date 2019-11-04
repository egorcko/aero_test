import { getProducts } from "@/api";
import { selectActiveFilters } from "@/store/selectors";
import { LOAD } from "@/store/actionTypes/prefixes";
import { SUCCESS, FAIL, START } from "@/store/actionTypes/postfixes";
import { PRODUCTS, FILTER } from "@/store/actionTypes/names";

function fetchProductsStart() {
  return {
    type: `${LOAD}${PRODUCTS}${START}`
  };
}

function fetchProductsSuccess(payload) {
  return {
    type: `${LOAD}${PRODUCTS}${SUCCESS}`,
    payload
  };
}

function fetchProductsFailure() {
  return {
    type: `${LOAD}${PRODUCTS}${FAIL}`
  };
}

export default function fetchProductsRequest() {
  return async (dispatch, getState) => {
    dispatch(fetchProductsStart());

    function getRandomInRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const filters = selectActiveFilters(getState());

    const apiMethod = filters.length ? FILTER : PRODUCTS;
    const postfix =
      apiMethod === FILTER && getRandomInRange(1, 100) > 80 ? FAIL : SUCCESS;

    const { data, status } = await getProducts(apiMethod, postfix);
    if (status === `${apiMethod}${SUCCESS}`)
      dispatch(fetchProductsSuccess(data.products));
    else {
      console.error(data.message);
      dispatch(fetchProductsFailure());
    }
  };
}
