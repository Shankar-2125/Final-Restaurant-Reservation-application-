import "./App.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Success from "./pages/Success";
import Home from "./pages/Home";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
    );

};



export default App;
