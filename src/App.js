import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import Home from "./pages/Home";
import ClinicDetails from "./pages/ClinicDetails";
import ClinicRegister from "./pages/ClinicRegister";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes/:id" element={<ClinicDetails />} />
        <Route path="/cadastro" element={<ClinicRegister />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
