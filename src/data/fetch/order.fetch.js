export const addOrder = async data => {
   const response = await fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: {
         'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
   });

   return await response.json();
};

export const fetchAllOrders = async () => {
   const response = await fetch('http://localhost:3000/orders').catch(err => {
      console.log('ERROR');
   });

   const data = await response.json();

   return data;
};
