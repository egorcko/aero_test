import axios from "axios";
import { apiPrefix } from "../apiPrefix";

export default async function getProducts(prefix, postfix) {
  try {
    const { data } = await axios.get(`${apiPrefix}${prefix}${postfix}`);
    return data;
  } catch (error) {
    console.error(error);
  }
}
