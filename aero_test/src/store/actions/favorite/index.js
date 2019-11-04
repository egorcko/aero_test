import { toggleFavorite } from "@/api";
import { selectProductsList } from "@/store/selectors";
import { UPDATE } from "@/store/actionTypes/prefixes";
import { SUCCESS, FAIL } from "@/store/actionTypes/postfixes";
import { FAVORITE, PRODUCTS } from "@/store/actionTypes/names";

function updateProductsList(payload) {
  return {
    type: `${UPDATE}${PRODUCTS}`,
    payload
  };
}

export default function toggleFavoriteRequest(id) {
  return async (dispatch, getState) => {
    const products = selectProductsList(getState());

    function getRandomInRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let postfix = null;
    if (getRandomInRange(1, 100) > 80) postfix = FAIL;
    else postfix = SUCCESS;

    const { data, status } = await toggleFavorite(postfix, {
      productID: id
    });

    if (status === `${FAVORITE}${SUCCESS}`) {
      const productsList = products.map(product => {
        if (product.id === id) {
          return {
            ...product,
            inFav: data.inFav
          };
        }
        return product;
      });
      dispatch(updateProductsList(productsList));
    } else console.error(data.message);
  };
}
