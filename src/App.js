import { BrowserRouter } from "react-router-dom";
import Navbar from "./layouts/Navbar/Navbar";
import AppRoutes from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;