import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "./Components/Layout/Layout";
import { Cadastro } from "./Pages/Cadastro/Cadastro";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Cadastro />} />
        <Route path='cadastro' element={<Cadastro />} />
      </Route>
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
