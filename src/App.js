import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Covid from './pages/Covid';
import Lab from './pages/Lab';
import Register from './pages/Register';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import HeaderApp from './pages/Header';
import Home from './pages/Home';
import Footer from './pages/Footer';
import ProductDetail from './pages/ProductDetail';
import Bakery from './pages/Bakery';
import { useEffect } from 'react';

// import { Switch } from 'antd';
function App() {
  const dataAcc = localStorage.getItem('account');

  const api = 'Api'
  const config = {
    apiKey: 'AIzaSyA6yNEt0rCsAuI3gGy_GLmKJPdi35yELWc',
    authDomain: 'fir-project-bc588.firebaseapp.com',
    projectId: "fir-project-bc588",
    storageBucket: "fir-project-bc588.appspot.com",
    messagingSenderId: "867466785673",
    appId: "1:867466785673:web:227a19278fa790a454a758",
    measurementId: "G-YCVF70Y3FJ"
  }
  firebase.initializeApp(config);
  const app = initializeApp(config);

  const analytics = getAnalytics(app);

  useEffect(() => {
    if (!dataAcc) {
      let dataAccoount = [
        {
          id: 1,
          username: 'admin',
          email: 'admin@gmail.com',
          password: '1',
        },
        {
          id: 2,
          username: 'admin2',
          email: 'admin2@gmail.com',
          password: '1',
        }
      ];

      localStorage.setItem('account', JSON.stringify(dataAccoount));
    }
  }, [dataAcc])


  return (

    <BrowserRouter>
      <div className="App">
        <HeaderApp />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/login" exact element={<Login />}></Route>
          <Route path="/register" exact element={<Register />}></Route>
          <Route path="/bakery" exact element={<Bakery />}></Route>
          <Route path="/product/:id" exact element={<ProductDetail />}></Route>

        </Routes>
        <Footer />

      </div>
    </BrowserRouter>

  );
}

export default App;




