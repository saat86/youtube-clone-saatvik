import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import Feed from './components/Feed';
import VideoDetail from './components/videoDetail';
import theme from './components/Theme';
import { ThemeProvider } from '@emotion/react';
import { store } from './store';
import { Provider } from 'react-redux'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        index: true,
        element:<Feed/>
      },
      {
        path:"video/:id",
        element:<VideoDetail/>
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <ThemeProvider theme={theme}>
 <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
