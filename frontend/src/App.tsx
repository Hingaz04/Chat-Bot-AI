import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Chat from "./Pages/Chat";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
