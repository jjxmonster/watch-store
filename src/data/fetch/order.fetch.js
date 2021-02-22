export const addOrder = async data => {
   const response = await fetch('http://localhost:3001/orders', {
      method: 'POST',
      headers: {
         'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
   });
   return await response.json();
};

export const fetchAllOrders = async () => {
   const response = await fetch('http://localhost:3001/orders');
   return await response.json();
};