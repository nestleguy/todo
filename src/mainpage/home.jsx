import React from 'react';
import { Link } from 'react-router-dom';
import '../UI/button/button.css'; 

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home page!</h1>
      <Link to="/login" className="button" >Go to Login</Link>
    </div>
  );
};

export default Home;