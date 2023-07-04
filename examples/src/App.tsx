import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { KamaLayout } from 'kama-react-ui-kit';
import HomePage from './pages/home/HomePage';

const router = createBrowserRouter([
  {
    element: <KamaLayout title='سامانه تست' subTitle='شرکت کاوه مکاترونیک آریا' menus={[]} />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
