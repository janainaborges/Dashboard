import { Routes as Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Register } from "../pages/Register";
import { routes } from "./Routes";

export function Routes() {
  return (
    <Switch>
        <Route path='/register'element={<Register/>} />
        <Route path='/'element={<Home/>} />
    </Switch>
  );
}
