import { Link } from 'react-router-dom';
import useFetchEvent from 'hooks/useFetchEvent';
import { useLocation } from 'react-router-dom';

export const EventsSubView = () => {
  const event = useFetchEvent();
  const location = useLocation();

  return (
    <div>
      {!event && <h2>Loading...</h2>}
      {event && (
        <div>
          <img src={event.images[0].url} alt="" width={300} />
          <h2>{event.name}</h2>
          <Link to="details" state={location.state}>
            More details
          </Link>
        </div>
      )}
    </div>
  );
};
