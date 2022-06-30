import styled from '@emotion/styled';

export const Item = styled.li`
    padding: 14px;
    border: 1px solid #000;
    display: flex;
    align-items: center;
    box-shadow: 0px 7px 15px -4px #000000;

    &:not(:last-child) {
        margin-bottom: 7px;
    }
`
    
export const Status = styled.span`
    width: 14px;
    height: 14px;
    border-radius: 50%;
    margin-right: 7px;
`
    
export const Avatar = styled.img`
    display: block;
    margin-right: 7px;
`

export const Name = styled.p`
    font-size: 24px;
`