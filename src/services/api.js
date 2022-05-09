import axios from 'axios';
axios.defaults.baseURL = 'https://app.ticketmaster.com/discovery/v2/';

const KEY = '9cTjAjlRB53wyhAFk5VzXcBu5GiPU6fK';

export async function fetchEvents() {
  const response = await axios.get(`events?size=20&apikey=${KEY}`);

  return response.data._embedded.events;
}
export async function fetchEventsByID(id) {
  const responseByID = await axios.get(`events/${id}?apikey=${KEY}`);

  return responseByID.data;
}
