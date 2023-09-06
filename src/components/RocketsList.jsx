import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';
import RocketCard from './RocketCard';

const RocketsList = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  // const rockets = rocketsData.length ? rocketsData : rocketsData.rockets;

  console.log('Rockets:', rockets);
  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  return (
    <ul>
      {rockets.map((rocket) => (
        <li key={rocket.name}>
          <RocketCard rocket={rocket} />
        </li>
      ))}
    </ul>
  );
};

export default RocketsList;
