import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRocket } from '../redux/rockets/rocketsSlice';

const RocketCard = ({ rocket }) => {
  const dispatch = useDispatch();

  return (
    <div className="rocket-card">
      <img src={rocket.flickr_images[0]} alt={rocket.name} className="image" />
      <div>
        <div className="name">{rocket.name}</div>
        <div className="description">
          {rocket.reserved && <div className="booked-badge">Reserved</div>}
          {rocket.description}
        </div>
        <button
          type="button"
          className="reservation-btn"
          onClick={() => dispatch(bookRocket(rocket.id))}
        >
          Reserve Rocket
        </button>
      </div>
    </div>
  );
};

RocketCard.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default RocketCard;
