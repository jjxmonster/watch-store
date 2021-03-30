import React from 'react';
import { useQuery } from 'react-query';

import { fetchAllOrders } from '../../../data/fetch/order.fetch';
import { formatCurrency } from '../../../themes/index';
import {
   StyledOrdersWrapper,
   StyledOrdersTable,
   StyledOrdersTableHead,
   StyledOrdersTableBody,
} from './OrdersPage.css';

const OrdersPage = () => {
   const { data: orders } = useQuery('orders', () => fetchAllOrders());

   return (
      <StyledOrdersWrapper>
         <h2>ORDERS</h2>
         <StyledOrdersTable>
            <StyledOrdersTableHead>
               <tr>
                  <th>ID</th>
                  <th>DATE</th>
                  <th>COST</th>
                  <th>NAME</th>
                  <th>ITEMS</th>
               </tr>
            </StyledOrdersTableHead>
            <StyledOrdersTableBody>
               {orders.map(order => (
                  <tr key={order.id}>
                     <td>{order.id}</td>
                     <td>{order.date}</td>
                     <td>{formatCurrency(order.totalCost)}</td>
                     <td>{order.name}</td>
                     <td>
                        {order.order.map(item => (
                           <p
                              key={item.name}
                           >{`${item.amount}x ${item.name}`}</p>
                        ))}
                     </td>
                  </tr>
               ))}
            </StyledOrdersTableBody>
         </StyledOrdersTable>
      </StyledOrdersWrapper>
   );
};

export default OrdersPage;
