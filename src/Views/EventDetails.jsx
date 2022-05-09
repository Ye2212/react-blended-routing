import { Link, useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// если делать через nacigate то раскоментируй меня(это плохая практика navigate для програмной навигации.)
import { useFetchEvent } from 'hooks/useFetchEvent';

export const EventDetails = () => {
  const event = useFetchEvent();
  const location = useLocation();
  //   const navigate = useNavigate();
  console.log('location on EventDetails:', location);
  //   const goBackBtn = () => {
  //     navigate(location?.state ?? '/');
  //   };
  return (
    <>
      {!event && <p>loading...</p>}
      {event && (
        <>
          <Link to={location?.state ?? '/'}>GoBackLink</Link>
          {/* <button type="button" onClick={goBackBtn}>
            GoBackButton
          </button> */}
          <div>
            <img src={event.images[0].url} alt="" width={500} />
            <p>{event.name}</p>
            <p>Genre : {event.classifications[0].genre.name}</p>
            <p>subGenre : {event.classifications[0].subGenre.name}</p>
            <p>Segment : {event.classifications[0].segment.name}</p>
          </div>
        </>
      )}
    </>
  );
};
