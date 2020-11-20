import React from 'react';
import Menubar from '../Menubar/Menubar';
import './HomePage.scss'

const HomePage = () => {
    return (
        <div>
           <Menubar /> 
           <div className="body-wrapper text-center">
               <h2 className="">Apply and hear back every time</h2>
               <p>Exploring internships or jobs? Say good-bye to the typical job portals and use <br/> the power of Artificial Intelligence to become successful, faster.</p>
               <button className="login-btn">Get Started</button>
           </div>
        </div>
    );
};

export default HomePage;