import { Link, useLocation } from 'react-router-dom';
import { useFetchEvent } from 'hooks/useFetchEvent';
export const EventsSubView = () => {
  const event = useFetchEvent();
  const location = useLocation();
  console.log(event);
  console.log('location on EventsSun:', location);
  return (
    <div>
      {!event && <h2>Loading...</h2>}
      {event && (
        <div>
          <img src={event.images[0].url} alt="" width={300} />
          <p>{event.name}</p>
          <Link to="details" state={location.state}>
            More Details
          </Link>
        </div>
      )}
    </div>
  );
};
