import styled from 'styled-components';

export const StyledOrdersWrapper = styled.div`
   width: 100%;
   height: 85vh;
   padding: 10px;
   > h2 {
      font-size: 3vh;
      padding: 1%;
   }
`;
export const StyledOrdersTable = styled.table`
   width: 100%;
   height: 5%;
   color: ${({ theme }) => theme.colors.white.normal};
   font-size:2vh;
    > tr;
`;

export const StyledOrdersTableHead = styled.thead`
   > tr th {
      text-align: left;
      padding: 5px;
   }
`;

export const StyledOrdersTableBody = styled.tbody`
   > tr td {
      padding: 10px;
   }
   > tr:nth-child(odd) {
      background: ${({ theme }) => theme.colors.grey.normal};
   }
`;
