import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
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
    </div>
  );
}

export default App;
