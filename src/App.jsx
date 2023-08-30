import { useRoutes } from "react-router-dom";
import HomePage from "./pages/Home";

function App() {
  const route = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "*", element: <h2>404 error</h2> },
  ]);

  return route;
}

export default App;
