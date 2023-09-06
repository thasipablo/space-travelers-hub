import React from 'react';
import '../styles/MissionList.css';
import MissionCard from './MissionCard';

const MissionList = () => (
  <table border={1} className="mission-table">
    <tr>
      <th>Mission</th>
      <th>Description</th>
      <th>Status</th>
      <th>   </th>
    </tr>
    <MissionCard />
  </table>
);

export default MissionList;
