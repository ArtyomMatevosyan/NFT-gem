import axios from "axios";

export const getMarketplaceData = () => {
  return axios.get("searchResult.json").then((res) => res.data);
};
