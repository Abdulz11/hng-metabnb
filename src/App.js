import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Home from "./components/Home";
import { useState } from "react";
import Places from "./pages/Places";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainNav from "./components/MainNav";

function App() {
  const [modal, setModal] = useState(false);
  const [menu, setMenu] = useState(false);

  function noScroll() {
    if (modal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }

  noScroll();

  return (
    <BrowserRouter>
      <MainNav menu={menu} setMenu={setMenu} setModal={setModal} />
      <Routes>
        <Route
          path='/'
          element={
            <Home
              setModal={setModal}
              modal={modal}
              menu={menu}
              setMenu={setMenu}
            />
          }
        />
        <Route
          path='/placestostay'
          element={
            <Places
              setModal={setModal}
              modal={modal}
              menu={menu}
              setMenu={setMenu}
            />
          }
        />
      </Routes>
      <Footer />
      {modal && <Modal setModal={setModal} />}
    </BrowserRouter>
  );
}

export default App;
