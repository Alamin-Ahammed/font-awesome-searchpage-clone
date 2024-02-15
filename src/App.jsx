import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Sections/Header/Header";
import Footer from "./Sections/Footer/Footer";

function App() {
  
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
