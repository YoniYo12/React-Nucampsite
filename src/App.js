import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';
import { fetchCampsites } from './features/campsites/campsitesSlice';
import { fetchPartners } from './features/Partners/partnersSlice';

function App() {
  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(fetchCampsites());
    dispatch(fetchPartners());
  },[dispatch])
  return (
    <div className="App">
            <Header />
            <Routes >
              <Route path='/' element={<HomePage/>}></Route>
              <Route path='contact' element={<ContactPage/>}> </Route>
              <Route path='directory' element={<CampsitesDirectoryPage/>}> </Route>
              <Route path='directory/:campsiteId' element={<CampsiteDetailPage />}/>
              <Route path='About' element={<AboutPage/>}/>
            </Routes>
            <Footer />
    </div>
  );
}


export default App;