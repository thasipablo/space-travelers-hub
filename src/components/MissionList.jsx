import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMission } from '../redux/missions/missionsSlice';
import MissionCard from './MissionCard';
import '../assets/styles/MissionList.css';

const MissionList = () => {
  const { missionItems, missionsUpdated } = useSelector((state) => state.mission);

  const displayMission = missionsUpdated.length === 0 ? missionItems : missionsUpdated;

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchMission());
  }, [dispatch]);

  return (
    <table className="mission-table">
      <tr className="table-heading">
        <th className="mission-header">Mission</th>
        <th className="description">Description</th>
        <th className="status">Status</th>
        <th className="join"> </th>
      </tr>
      <tbody>
        {displayMission.map((item) => (
        <MissionCard
          key={item.mission_id}
          id={item.mission_id}
          missionName={item.mission_name}
          missionDescription={item.description}
          missionReserved={item.reserved}
        />
        ))}
      </tbody>
      

    </table>
  );
};

export default MissionList;
