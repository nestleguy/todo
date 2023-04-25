import React from 'react';
import { Link } from 'react-router-dom';
import '../UI/button/button.css'; 
import '../style/home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className='tasks'>
        <div>
      <Link to="/login" className="button" >Go to Login</Link>
        </div>
      </div>
      

      

    </div>
  );
};

export default Home;