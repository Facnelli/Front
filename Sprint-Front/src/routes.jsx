import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { AppLayout } from "./components";
import { Home, Cadastro } from "./pages";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path='teste' element={<Cadastro />} />
      </Route>
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
