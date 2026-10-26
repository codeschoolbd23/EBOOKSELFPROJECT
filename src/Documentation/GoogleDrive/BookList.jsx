import React from 'react';
import Navbar from './../Navigation/Navbar/Navbar';
import Footer from './../Navigation/Footer/Footer';
import Demo from './Demo';

const BookList = () => {

  return (
    <div>
      <Navbar />
      <div>
        <Demo />
      </div>
      <Footer />
    </div>
  );
};

export default BookList;