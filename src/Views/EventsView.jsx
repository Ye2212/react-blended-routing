import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import * as eventsApi from '../services/api';

export const EventsView = () => {
  const [events, setEvents] = useState(null);
  const location = useLocation();
  console.log('location on Events:', location);

  useEffect(() => {
    try {
      eventsApi.fetchEvents().then(setEvents);
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
