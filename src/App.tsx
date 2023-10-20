import { BrowserRouter } from "react-router-dom";
// import "./App.css";
import { AppRouter } from "./router";
const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
