import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Error404 from './components/Error404.jsx';
import Home from './components/Home.jsx';
import Hotels from './components/Hotels.jsx';
import Rsvp from './components/Rsvp/Rsvp.jsx';
import Registry from './components/Registry.jsx';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error404 />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'rsvp',
          element: <Rsvp />,
        },
        {
          path: 'hotels',
          element: <Hotels />,
        },
        {
          path: 'registry',
          element: <Registry />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
