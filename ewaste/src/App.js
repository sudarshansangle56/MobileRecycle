import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Front from "./components/Front";
import Work from "./components/Work";
import Categ from "./components/Categ";
import Vision from "./components/VIsion";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import AdminPage from "./components/AdminPage";
import IMEIChecker from "./components/IMEIChecker";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/work" element={<Work />} />
          <Route path="/categories" element={<Categ />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/sell" element={<ContactForm />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/IMEI" element={<IMEIChecker />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
