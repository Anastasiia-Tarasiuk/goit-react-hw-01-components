import styled from '@emotion/styled';

export const TableItem = styled.td`
    text-align: center;

    &:first-child {
        text-transform: capitalize;    
    }
`;

export const TableRow = styled.tr`
    background-color: #fff;


    &:nth-child(even) {
        background-color: #ecf1f4 ;
    }    

`;

