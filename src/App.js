import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
            <Header />
            <CampsitesDirectoryPage />
            <Footer />
    </div>
  );
}


export default App;