import { FILTER_OFFERS, FILTER_PAYOUT_TYPE } from "./../actions/type";
const initialState = {
  offers: []
};
export default function(state = initialState, action) {
  //console.log(action.type);
  switch (action.type) {
    case FILTER_OFFERS:
      return {
        offers: action.payload
      };

    default:
      return state;
  }
}
