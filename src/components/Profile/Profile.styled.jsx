import styled from '@emotion/styled';

export const UserProfile = styled.div`
    background-color: #fff;
    border: 1px solid #000;
    padding: 14px;
    margin-right: 28px
`;

export const UserWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 14px;
`;

export const UserImg = styled.img`
    border-radius: 50%;
    width: 100px;
    margin-bottom: 14px;

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
    align-items: center;
 
    &:not(:last-child) {
        margin-right: 14px
    }
`;

export const UserStatsLabel = styled.span`
    font-weight: 500;
    margin-bottom: 4px;
`;
    
export const UserStatsQuantity = styled.span`
    color: #fe4f60;
`;