import styled from '@emotion/styled';

export const UserProfile = styled.div`
    background-color: #fff;
    border: 1px solid #000;
    margin-right: 28px;
    box-shadow: 0px 7px 15px -4px #000000;
    `;
    
    export const UserWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 14px;
    padding: 14px;
`;

export const UserImg = styled.img`
    border-radius: 50%;
    width: 100px;
    margin-bottom: 14px;
    border: 1px solid #000;
    background-color: #f3f6f9;

`;

export const UserName = styled.p`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 14px;
    
`;

export const UserTag = styled.p`
    color: #a1abb6;
    margin-bottom: 14px; 

    &::before {
        content:'@';
    }
`;

export const UserLocation = styled.p`
    color: #a1abb6;
`;

export const UserStats = styled.ul`
    display: flex;  
    `;
    
    export const UserStatsItems = styled.li`
    display: flex;
    flex-direction: column;
    padding: 14px;

    align-items: center;
    border: 1px solid #000;
    background-color: #f3f6f9;
 
    // &:not(:last-child) {
    //     margin-right: 14px
    // }
`;

export const UserStatsLabel = styled.span`
    margin-bottom: 4px;
`;
    
export const UserStatsQuantity = styled.span`
    font-weight: 700;
`;