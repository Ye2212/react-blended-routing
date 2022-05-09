import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as eventsAPI from '../services/api';
const useFetchEvent = () => {
  const [event, setEvent] = useState(null);
  const { eventsId } = useParams();

  useEffect(() => {
    eventsAPI.fetchEventsByID(eventsId).then(setEvent);
  }, [eventsId]);
  console.log(event);
  return event;
};
export default useFetchEvent;
