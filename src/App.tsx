// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToStart from "./components/scrollToStart";
import HomePage from "./pages/homePage";
import { TermsPage } from "./pages/terms";
import { PrivacyPage } from "./pages/privacyPolicy";

function App() {
  return (
    <Router>
      <ScrollToStart/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
