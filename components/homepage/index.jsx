import React from 'react';
import Header from '../reusable/Header';
import Footer from '../reusable/Footer';

const Homepage = () => {
  return (
    <div className="m-0 p-0 relative h-screen">
      <Header />
      <div className="px-52 py-1 flex-1 space-y-10">
        <h5>Hi, my name is</h5>
        <h1 className="text-6xl"> Oreoluwa Ibikunle,</h1>  
        <h2 className="text-4xl">I am an Engineer</h2>
        <p className="text-lg">I am a passionate software engineer with a knack for crafting captivating digital experiences. With a specialization in website and mobile application development, I thrive on transforming ideas into polished, user-friendly realities.</p>
      </div>
      <Footer />
    </div>
  )
}

export default Homepage;