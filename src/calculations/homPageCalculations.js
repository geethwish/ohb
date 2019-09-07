//calculate statices

export const getComparisonResult = (newData, oldData) => {
  //store comparison data
  const oldTotal = oldData;
  //initialize Reducer
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  //convert string array to float array
  const newDataToFloat =
    newData.length > 1
      ? newData.map(dt => {
          return parseFloat(dt);
        })
      : parseFloat(newData);
  //calculate this week total
  const totalCount =
    newDataToFloat.length > 1 ? newDataToFloat.reduce(reducer) : newDataToFloat;

  //calculation
  let NegativeChange = false;
  let changedPercentage = 0;

  if (totalCount > oldTotal) {
    changedPercentage = Math.round(((totalCount - oldTotal) / oldTotal) * 100);
  } else if (totalCount === oldTotal) {
    changedPercentage = 0;
  } else {
    NegativeChange = true;
    changedPercentage = Math.round(((oldTotal - totalCount) / oldTotal) * 100);
  }
  if (Math.abs(changedPercentage) > 100) {
    changedPercentage = 100;
  }
  // console.log(totalCount);
  // console.log(oldTotal);
  // console.log(NegativeChange);
  // console.log(changedPercentage);

  return {
    total: totalCount,
    NegativeChange: NegativeChange,
    percentage: changedPercentage
  };
};

export default {
  getComparisonResult
};
