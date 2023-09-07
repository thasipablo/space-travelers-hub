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
  let class_name = '';
  let member = '';
  let member_class = '';
  if (missionReserved) {
    join = 'Leave Mission';
    member = 'Active Member';
    class_name = 'btn-leave-mission';
    member_class = 'member';
  } else {
    join = 'Join Mission';
    class_name = 'btn-join';
    member = 'NOT A MEMBER';
    member_class = 'not-member';
  }

  return (
    <tbody>
      <tr id={id}>
        <td className="mission">{missionName}</td>
        <td>{missionDescription}</td>
        <td><button type="button" disabled className={member_class}>{member}</button></td>
        <td><button key={id} onClick={() => dispatch(actionMission(id))} type="button" className={class_name}>{join}</button></td>
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
