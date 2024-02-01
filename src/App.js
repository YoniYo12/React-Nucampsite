import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';



function App() {
  return (
    <div className="App">
            <Header />
            <Routes >
              <Route path='/' element={<HomePage/>}></Route>
              <Route path='contact' element={<ContactPage/>}> </Route>
              <Route path='directory' element={<CampsitesDirectoryPage/>}> </Route>
            </Routes>
            <Footer />
    </div>
  );
}


export default App;