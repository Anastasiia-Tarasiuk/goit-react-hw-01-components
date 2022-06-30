import { Profile } from "./Profile/Profile";
import { StatisticsSection } from "./StatisticsSection/StatisticsSection";
import user from "user.json";
import data from "data.json";

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
    </div>
  );
};


// id={data.id} label={data.label} percentage={data.percentage}