import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMission } from '../redux/missions/missionsSlice';
import MissionCard from './MissionCard';
import '../assets/styles/MissionList.css';

const MissionList = () => {
  const { missionItems } = useSelector((state) => state.mission);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMission());
  }, [dispatch]);

  return (
    <table border={1} className="mission-table">
      <tr>
        <th>Mission</th>
        <th>Description</th>
        <th>Status</th>
        <th> </th>
      </tr>
      {missionItems.map((item) => (
        <MissionCard
          key={item.mission_id}
          id={item.mission_id}
          missionName={item.mission_name}
          missionDescription={item.description}
        />
      ))}
    </table>
  );
};

export default MissionList;
