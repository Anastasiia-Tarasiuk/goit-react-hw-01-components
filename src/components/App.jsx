import { Profile } from "./Profile/Profile";
import { StatisticsSection } from "./StatisticsSection/StatisticsSection";
import { FriendList } from "./FriendsList/FriendsList";
import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
        fontFamily: 'Roboto'
      }}
    >
      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats}  />
      <StatisticsSection title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};


