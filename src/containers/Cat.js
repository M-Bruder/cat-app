import React, { Component } from 'react';
import Header from '../components/Header';
import CatRandom from '../components/CatRandom';

class Cat extends Component {
    render() {
      return (
        <div>
          <Header />
          <CatRandom />
        </div>
      );
    }
  }
  
  export default Cat;
  