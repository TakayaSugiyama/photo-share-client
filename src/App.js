import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
