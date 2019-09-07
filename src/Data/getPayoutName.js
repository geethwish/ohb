export const requestPayoutName = code => {
  let payoutText = "";
  if (code === "cpa_flat") {
    payoutText = "CPA";
  } else if (code === "cpa_both") {
    payoutText = "CPA/CPI";
  } else if (code === "cpi_flat") {
    payoutText = "CPI";
  } else if (code === "cps_flat") {
    payoutText = "CPS";
  } else if (code === "cps") {
    payoutText = "CPS";
  } else {
    payoutText = "NONE";
  }
  return payoutText;
};
export default {
  requestPayoutName
};
