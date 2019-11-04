import axios from "axios";
import { apiPrefix } from "../apiPrefix";
import { FAVORITE } from "@/store/actionTypes/names";

export default async function toggleFavorite(postfix, params) {
  try {
    const { data } = await axios.get(`${apiPrefix}${FAVORITE}${postfix}`, {
      params
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}
