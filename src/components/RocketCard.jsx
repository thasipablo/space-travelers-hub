import React from 'react';
import PropTypes from 'prop-types';

const RocketCard = ({ rocket }) => <div>{rocket.name}</div>;

RocketCard.propTypes = {
  rocket: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default RocketCard;
