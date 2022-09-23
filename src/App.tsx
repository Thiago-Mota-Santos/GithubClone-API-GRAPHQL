import "react-calendar-heatmap/dist/styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./pages/Home";
import Repo from "./pages/Repo";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Profile />}></Route>
        <Route path="/:username" element={<Profile />}></Route>
        <Route path="/:username/:reponame" element={<Repo />}></Route>
      </Routes>
      <Footer />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
