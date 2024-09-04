import React from 'react';
import Hero from './assets/components/Hero';
import { Navbar } from './assets/components/Navbar';


const App = () => {
  return (
    <div className='relative h-full overflow-y-auto antialiased'>
      {/* Background Image */}
      <div className='fixed inset-0 bg-fixed bg-cover bg-center bg-img'></div>
      
      {/* Main content */}
      <div className='relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto'>
        <Hero />
        <Navbar/>
      </div>
    </div>
  );
}

export default App;