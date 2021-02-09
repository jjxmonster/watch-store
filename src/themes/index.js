export const formatCurrency = value => {
   const number = Number(value);

   return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'EUR',
   }).format(number);
};
