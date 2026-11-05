import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Category from './components/category';
 import Footer from './components/footer';
<link
  href="https://cdn.jsdelivr.net/npm/remixicon@4.9.0/fonts/remixicon.css"
  rel="stylesheet"
/>

const App = () => {
  return (
    <div >
      <div className="upper bg-amber-800 h-[25px] w-full "></div>
      <Navbar />
      <Hero />
      <Category />
      <Footer />
    </div>
  );
}

export default App;
