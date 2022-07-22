import { Routes as Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Register } from "../pages/Register";
import { Users } from "../pages/Users";


export function Routes() {
  
 const routes = [
  {
    id:1,
    path: "/",
    component: <Home/>,
  },
  {
    id:2,
    path: "/register",
    component: <Register/> ,
  },
  {
    id:3,
    path: "/user",
    component: <Users/> ,
  },
];
  return (
    <Switch>
      {routes.map((route) => (
        <Route key={route.id} path={route.path} element={route.component} />
      ))}
    </Switch>
  );
}
