import { Route, Routes } from "react-router-dom";
import { About } from "../Componets/About";
import { Contact } from "../Componets/Contact";
import { Home } from "../Componets/Home";
export const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
