import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ideas from "./pages/Ideas";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ideas" element={<Ideas />} />
      </Routes>
    </Router>
  );
};

export default App;
