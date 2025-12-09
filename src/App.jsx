import IntroScreen from "./components/IntroScreen";
import LedLogo from "./components/LedLogo";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Tasks from "./components/Tasks";
function App() {
  const location = useLocation();
  const isIntro = location.pathname === "/";
  return (
    <>
      {!isIntro && <Navbar />}
      <Routes>
        <Route path="/" element={<IntroScreen />} />
        <Route path="/staff" element={<Tasks />} />
      </Routes>
      {!isIntro && <Footer />}
    </>
  );
}

export default App;
