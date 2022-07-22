import React from 'react'
import "./App.scss";
import Card from './components/card/Card';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import datA from "./data"


const App = () => {
  return (
    <div>
     <Header/>
    <Card dataa={datA} />
    <Footer/>
    </div>
  );
}

export default App
