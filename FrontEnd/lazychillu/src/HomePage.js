import React from 'react';
import Navbar from './components/Navbar';
import FootNote from './components/FootNote';
import {Link,useParams} from 'react-router-dom';
import banner from './components/banner.png';
// import banner2 from './components/banner2.jpeg';

const HomePage = () => {
  return (
    <div className="bg">
      <Navbar/>
      <div className="banner">
          <div className="WelcomeText">
            <h2 className="homeTitle">Design Your </h2>
            <h2 className="homeTitle">Comfort Home</h2>
            <p className="homeExtra">Welcome to LazyCat! Decorate your homes<br/> with the best! Home is the starting place of love,<br/> hope and dreams, hence design it with intention</p>
            <Link className="shopButton" to='/products'>Shop Now</Link>
          </div>
          <div className="bannerImage">
            <img className="banner1" src={banner} alt="banner1"/>
            
          </div>
      </div>

      <FootNote/>
    </div>
  )
}

export default HomePage;
