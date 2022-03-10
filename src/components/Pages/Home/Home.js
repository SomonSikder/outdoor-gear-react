import React from 'react';
import HomeProducts from '../HomeProducts/HomeProducts';
import Banner from './Banner/Banner';
import HomeReview from './HomeReview/HomeReview';
import Tutorial from './HomeReview/Tutorial';
import Footer from '../../Footer/Footer'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeProducts></HomeProducts>
      <Tutorial></Tutorial>
      <HomeReview></HomeReview>
      <Footer></Footer>
    </div>
  );
};

export default Home;
