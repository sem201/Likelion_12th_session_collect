import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import HomePage from "./pages/HomePage";
import PostDetailPage from "./pages/postDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/detail/:postID",
    element:<PostDetailPage/>,
  }
]);

export default router;
