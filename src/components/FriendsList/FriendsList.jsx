import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import { List } from './FriendsList.styled';

export const FriendList = ({ friends }) => {
    return (
        <List>
            {friends.map(friend => (
                <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} key={friend.id} />            
            ))}
        </List>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
       id: PropTypes.number.isRequired
    }))
}