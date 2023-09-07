import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/MissionCard.css';
import { useDispatch } from 'react-redux';
import { actionMission } from '../redux/missions/missionsSlice';

const MissionCard = ({
  id, missionName, missionDescription, missionReserved,
}) => {
  const dispatch = useDispatch();
  let join = '';
  let className = '';
  let member = '';
  let memberClass = '';
  if (missionReserved) {
    join = 'Leave Mission';
    member = 'Active Member';
    className = 'btn-leave-mission';
    memberClass = 'member';
  } else {
    join = 'Join Mission';
    className = 'btn-join';
    member = 'NOT A MEMBER';
    memberClass = 'not-member';
  }

  return (
    <tbody>
      <tr id={id}>
        <td className="mission">{missionName}</td>
        <td>{missionDescription}</td>
        <td><button type="button" disabled className={memberClass}>{member}</button></td>
        <td><button key={id} onClick={() => dispatch(actionMission(id))} type="button" className={className}>{join}</button></td>
      </tr>
    </tbody>

  );
};

MissionCard.propTypes = {
  id: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  missionDescription: PropTypes.string.isRequired,
  missionReserved: PropTypes.bool.isRequired,
};

export default MissionCard;
