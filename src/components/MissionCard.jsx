import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/MissionCard.css';

const MissionCard = ({ id, missionName, missionDescription }) => (
  <tr id={id}>
    <td className="mission">{missionName}</td>
    <td>{missionDescription}</td>
    <td><button type="button" disabled className="member">NOT A MEMBER</button></td>
    <td><button type="button" className="btn-join">Join Mission</button></td>
  </tr>
);

MissionCard.propTypes = {
  id: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  missionDescription: PropTypes.string.isRequired,
};

export default MissionCard;
