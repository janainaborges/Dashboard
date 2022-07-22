import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
     <Routes/>
    </BrowserRouter>
  );
}

export default App;
