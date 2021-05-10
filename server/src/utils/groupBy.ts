const groupBy = (items: any, key: any) => items.reduce((accumulator: any, currentValue: any) => {
  (accumulator[currentValue[key]] = accumulator[currentValue[key]] || []).push(currentValue);
  return accumulator;
}, {});

export default groupBy;
