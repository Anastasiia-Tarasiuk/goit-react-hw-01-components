import PropTypes from 'prop-types';
import { UserProfile, UserLocation, UserWrap, UserStats, UserStatsItems, UserImg, UserName, UserTag, UserStatsLabel, UserStatsQuantity} from './Profile.styled';

// не використовувала key, оскільки рендерили тільки 1 картку юзера
export const Profile = ({ username, tag, location, avatar, stats }) => {  
  return <UserProfile>
    <UserWrap>
      <UserImg
        src={avatar}
        alt="User avatar"
        className="avatar"
      />
      <UserName>{username}</UserName>
      <UserTag>{tag}</UserTag>
      <UserLocation>{location}</UserLocation>
    </UserWrap>

    <UserStats>
      <UserStatsItems>
          <UserStatsLabel>Followers</UserStatsLabel>
          <UserStatsQuantity>{stats.followers}</UserStatsQuantity>
      </UserStatsItems>
      <UserStatsItems>
        <UserStatsLabel>Views</UserStatsLabel>
        <UserStatsQuantity>{stats.views}</UserStatsQuantity>
      </UserStatsItems>
      <UserStatsItems>
        <UserStatsLabel>Likes</UserStatsLabel>
        <UserStatsQuantity>{stats.likes}</UserStatsQuantity>
      </UserStatsItems>
    </UserStats>
  </UserProfile>
}
 

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    })
}