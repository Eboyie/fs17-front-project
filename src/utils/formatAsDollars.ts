export const formatAsDollars = (price: number) => {
  const dollarsAmount = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD',
  }).format(Number(price));
  return dollarsAmount;
};
