import { createBrowserRouter } from "react-router-dom";
import App from './../App';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children : [
      {
        path : '/home',
        element : <h1>this is home section</h1>
      }
    ]
  },
]);

export default router