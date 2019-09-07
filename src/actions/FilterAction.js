import { FILTER_OFFERS, FILTER_PAYOUT_TYPE } from "./type";

export const selectOffers = data => dispatch => {
  //console.log("getting data..", data);
  const offerData = data;
  dispatch({
    type: FILTER_OFFERS,
    payload: offerData
  });
};
