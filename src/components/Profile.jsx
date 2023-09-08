import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rocket.rockets);
  const bookedRockets = rockets.filter((rocket) => rocket.reserved);

  const missions = useSelector((state) => state.mission.missionItems);
  const reservedMissions = missions.filter((mission) => mission.reserved);

  return (
    <div className="profile">
      <div className="missions">
        <h2>My Missions</h2>
        <ul className="mission-items">
          {!reservedMissions.length && (
            <li className="mission-item">
              You participate to any mission yet.
            </li>
          )}
          {reservedMissions.map((mission) => (
            <li key={mission.mission_id} className="mission-item">
              {mission.mission_name}
            </li>
          ))}
        </ul>
      </div>
      <div className="rockets">
        <h2>My Rockets</h2>
        <ul className="rocket-items">
          {!bookedRockets.length && (
            <li className="rocket-item">You have booked any rocket yet.</li>
          )}
          {bookedRockets.map((rocket) => (
            <li key={rocket.id} className="rocket-item">
              {rocket.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
