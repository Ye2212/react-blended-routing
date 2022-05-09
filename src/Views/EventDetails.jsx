import useFetchEvent from 'hooks/useFetchEvent';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import(useFetchEvent);
export const EventDetails = () => {
  const event = useFetchEvent();
  const location = useLocation();
  const navigate = useNavigate();
  const goBackBtn = () => {
    navigate(location?.state ?? '/')
  }
  return (
    <>
      {!event && <h2>Loading...</h2>}
      {event && (
        <>
          <Link to={location.state}>Go Back</Link>
          <button type="button" onClick={goBackBtn}>Go Back</button>
          <div>
            <img src={event.images[0].url} alt="" width={500} />
            <p>{event.name}</p>
            <p>Genre: {event.classifications[0].genre.name}</p>
            <p>SubGenre: {event.classifications[0].subGenre.name}</p>
            <p>Segment: {event.classifications[0].subGenre.name}</p>
          </div>
        </>
      )}
    </>
  );
};
