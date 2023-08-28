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
import Loading from './components/Loading.jsx';

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
          // loader: () => {
          //   const jwt = localStorage.getItem('jwt');
          //   console.log('jwt: ', jwt);
          //   if (!jwt) {
          //     console.log('should redirect!');
          //     return redirect('/admin/auth');
          //   }
          //   return null;
          //   // return redirect('/admin/dashboard');
          // },
          children: [
            // {
            //   index: true,
            //   element: <Loading />,
            //   loader: () => {
            //     const jwt = localStorage.getItem('jwt');
            //     console.log('jwt: ', jwt);
            //     if (!jwt) {
            //       console.log('should redirect!');
            //       return redirect('/auth');
            //     }
            //     return null;
            //     // return redirect('/admin/dashboard');
            //   },
            // },
            // {
            //   index: true,
            //   element: localStorage.getItem('jwt') ? (
            //     <Dashboard />
            //   ) : (
            //     <AdminAuth />
            //   ),
            // },
            // {
            //   index: true,
            //   element: <Dashboard />,
            //   loader: () => {
            //     const jwt = localStorage.getItem('jwt');
            //     console.log('jwt: ', jwt);
            //     if (!jwt) {
            //       console.log('should redirect!');
            //       return redirect('/admin/auth');
            //     }
            //     return null;
            //     // return redirect('/admin/dashboard');
            //   },
            // },
            {
              index: true,
              loader: () => redirect('/admin/dashboard'),
            },
            {
              path: '*',
              loader: () => {
                console.log('this: ', this);
                return redirect('/admin');
              },
            },
            {
              path: 'auth',
              element: <AdminAuth />,
            },
            {
              path: 'dashboard',
              element: <Dashboard />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
