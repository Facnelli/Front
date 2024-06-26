import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "./Layout/Layout";
import { Events } from "./Pages/Events/Events";
import App from "./App";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<App />}>
        <Route index element={<Events />} />
        <Route path='Eventos' element={<Events />} />
      </Route>
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
