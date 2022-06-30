import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './FriendListItem.styled';


export const FriendListItem = ({avatar, name, isOnline}) => {
    return <Item>
        {isOnline ? <Status style={{ backgroundColor: 'green'}}>{isOnline}</Status> : <Status style={{ backgroundColor: 'red'}}>{isOnline}</Status>}
        <Avatar src={avatar} alt="User avatar" width="48" />
        <Name>{name}</Name>
    </Item>
}