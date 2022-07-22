import React from 'react'
import CourseCard from './components/CourseCard';
import data from './data'
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <MyNavbar />

      <CourseCard data={data} />
      <Footer/>
    </div>
  );
}

export default App
