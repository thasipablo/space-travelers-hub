import { useSelector } from 'react-redux';
import '../assets/styles/MissionList.css';
import MissionCard from './MissionCard';

const MissionList = () => {
  const { missionItems } = useSelector((state) => state.mission)

  return (
    <table className="mission-table">
      <tr className="table-heading">
        <th className="mission-header">Mission</th>
        <th className="description">Description</th>
        <th className="status">Status</th>
        <th className="join"> </th>
      </tr>
      <tbody>
        {missionItems.map((item) => (
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
