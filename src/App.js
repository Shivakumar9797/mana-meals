import Navbar from "./layouts/Navbar/Navbar";
import AppRoutes from "./routes/routes";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;