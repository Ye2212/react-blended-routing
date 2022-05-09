import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomeView } from 'Views/HomeView';
import { EventsView } from 'Views/EventsView';
import { EventsSubView } from 'Views/EventsSubView';
import { EventDetails } from 'Views/EventDetails';
import { NotFoundView } from 'Views/NotFoundView';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="events" element={<EventsView />}>
          <Route path=":eventsId" element={<EventsSubView />} />
        </Route>
        <Route path="events/:eventsId/details" element={<EventDetails />} />
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  );
};
