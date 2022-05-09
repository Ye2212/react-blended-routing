import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as eventsApi from '../services/api';

export const useFetchEvent = () => {
  const [event, setEvent] = useState(null);
  const { eventsId } = useParams();
  console.log(eventsId);

  useEffect(() => {
    eventsApi.fetchEventsByID(eventsId).then(setEvent);
  }, [eventsId]);

  return event;
};
