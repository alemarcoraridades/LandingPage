import { BrowserRouter, Routes, Route } from "react-router-dom";
import MotorAP from "./pages/motorap";
import Upsell from "./pages/Upsell";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/motorap" element={<MotorAP />} />
        <Route path="/upsell" element={<Upsell />} />

        {/* Opcional: rota principal */}
        <Route path="/" element={<MotorAP />} />
      </Routes>
    </BrowserRouter>
  );
}

