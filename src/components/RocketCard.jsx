import React from 'react';
import PropTypes from 'prop-types';

const RocketCard = ({ rocket }) => (
  <div className="rocket-card">
    <img src={rocket.flickr_images[0]} alt={rocket.name} className="image" />
    <div>
      <div className="name">{rocket.name}</div>
      <div className="description">{rocket.description}</div>
      <button type="button" className="reservation-btn">
        Reserve Rocket
      </button>
    </div>
  </div>
);

RocketCard.propTypes = {
  rocket: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default RocketCard;
