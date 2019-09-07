var moment = require("moment");
export const remainingDate = expiryDate => {
  let expirDate = moment(expiryDate);
  let today = moment();
  let result = moment.duration(expirDate.diff(today));
  let days = result["_data"].days;
  let months = result["_data"].months;
  let Years = result["_data"].years;
  let yearValidate =
    Years === 0 ? "" : Years === 1 ? Years + " Year" : Years + " Years";
  let MonthValidate =
    months === 0 ? "" : months === 1 ? months + " Month" : months + " Months";
  let DaysValidate =
    days === 0 ? "" : days === 1 ? days + " Day" : days + " Days";
  let RemainingDate =
    Years > 0 ? yearValidate : months > 0 ? MonthValidate : DaysValidate;

  return RemainingDate + " From Now";
};
export default {
  remainingDate
};
