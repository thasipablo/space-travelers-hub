import { useSelector } from 'react-redux';
// import { fetchRockets } from '../redux/rockets/rocketsSlice';
import RocketCard from './RocketCard';

const RocketsList = () => {
  // const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocket.rockets);

  // useEffect(() => {
  //   dispatch(fetchRockets());
  // }, [dispatch]);

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
