import { filterOffersAPI } from "./urlConfig";
import { requestsData } from "./../utils/api";
export const filterOffers = inputValue => {
  let data = [];
  let filter = [];
  let news = [];

  return requestsData(filterOffersAPI).then(res => {
    data = res;
    console.log("00", res);
    filter = data.filter(i =>
      i.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    news = filter.map(item => ({
      ...item,
      value: item.id,
      label: item.name
    }));

    return news;
  });
};
export default {
  filterOffers
};
