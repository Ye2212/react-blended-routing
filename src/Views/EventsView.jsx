import { useState, useEffect } from 'react';
import * as eventsAPI from '../services/api';
import { Link, Outlet, useLocation } from 'react-router-dom';
export const EventsView = () => {
  const [events, setEvents] = useState(null);
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    try {
      const res = eventsAPI.fetchEvents().then(setEvents);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      {events && (
        <ul>
          {events.map(event => (
            <li key={event.id}>
              <Link to={`${event.id}`} state={location.pathname}>
                {event.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <Outlet />
    </>
  );
};
