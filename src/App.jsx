import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/login/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DetailsPages } from "./pages/details/DetailsPages";
import { Account } from "./pages/account/Account";
import { Create } from "./components/create/Create";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/details/:id' element={<DetailsPages />} />
          <Route path='/account' element={<Account />} />
          <Route path='/create' element={<Create />} />
        </Routes>
        
        <Footer />
      </Router>
    </>
  );
}

export default App;
