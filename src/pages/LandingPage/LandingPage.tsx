import React from 'react';
import Page from '../Page';
import LandingScreen from '../../features/landing/landingScreen';
import Navbar from '../../features/navbar/navbarScreen';

const LandingPage = () => (
  <Page>
    <>
      <Navbar />
      <LandingScreen />
    </>
  </Page>
);

export default LandingPage;
