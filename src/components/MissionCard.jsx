import React from 'react';
import PropTypes from 'prop-types';

const MissionCard = ({ id, missionName, missionDescription }) => (
  <tr id={id}>
    <td>{missionName}</td>
    <td>{missionDescription}</td>
    <td>NOT A MEMBER</td>
    <td>Join Mission</td>
  </tr>
);

MissionCard.propTypes = {
  id: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  missionDescription: PropTypes.string.isRequired,
};

export default MissionCard;
