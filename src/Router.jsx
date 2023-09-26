import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from 'react-router-dom';
import App from './App.jsx';
import Error404 from './components/Error404.jsx';
import Home from './components/Home.jsx';
import Hotels from './components/Hotels.jsx';
import Rsvp from './components/Rsvp/Rsvp.jsx';
import Registry from './components/Registry.jsx';
import Schedule from './components/Schedule.jsx';
import AdminWrapper from './components/Admin/AdminWrapper.jsx';
import Dashboard from './components/Admin/Dashboard.jsx';
import AdminAuth from './components/Admin/AdminAuth.jsx';
import Addresses from './components/Admin/Addresses.jsx';
import GroupEdit from './components/Admin/GroupEdit/GroupEdit.jsx';

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
          path: 'itinerary',
          element: <Schedule />,
        },
        {
          path: 'hotels',
          element: <Hotels />,
        },
        {
          path: 'registry',
          element: <Registry />,
        },
        {
          path: 'admin',
          element: <AdminWrapper />,
          children: [
            {
              index: true,
              loader: () => redirect('/admin/dashboard'),
            },
            {
              path: 'auth',
              element: <AdminAuth />,
            },
            {
              path: 'dashboard',
              element: <Dashboard />,
            },
            {
              path: 'dashboard/:styleParam',
              element: <Dashboard />,
            },
            {
              path: 'addresses',
              element: <Addresses />,
            },
            {
              path: 'group-edit',
              element: <GroupEdit />,
            },
            {
              path: 'group-edit/:groupId',
              element: <GroupEdit />,
            },
            // {
            //   path: 'group-edit/new',
            //   element: <GroupEdit />,
            // },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
