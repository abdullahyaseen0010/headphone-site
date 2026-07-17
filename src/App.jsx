import React from 'react'
import Navbar from './components/Navbar/Navbar';
import { UpdateFollower } from 'react-mouse-follower';
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import Features from './components/Features/Features'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <main className="overflow-x-hidden">
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 999,
          followSpeed: 1.5,
        }}
      >
      <Navbar />
      <Hero />
      </UpdateFollower>
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "black",
          zIndex: 999,
          followSpeed: 1.5,
        }}
      >
      <Services />
      <Banner />
      <Features />
      <Footer />
      </UpdateFollower>
    </main>
  );
};

export default App;