import IntroScreen from "./components/IntroScreen";
import LedLogo from "./components/LedLogo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tasks from "./components/Tasks";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroScreen />} />
          <Route path="/to-do" element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
