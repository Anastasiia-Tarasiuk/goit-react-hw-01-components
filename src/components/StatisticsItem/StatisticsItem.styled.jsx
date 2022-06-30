import styled from '@emotion/styled';

export const Item = styled.li`
    background-color: ${`#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`};
    width: 60px;
    padding: 14px;

    display:flex;
    flex-direction: column;
    align-items: center;
`;

export const Label = styled.span`
    color: #fff;
    margin-bottom: 7px;
`

export const Percentage = styled.span`
    color: #fff;
    font-size: 24px;
    font-weight: 500;
`