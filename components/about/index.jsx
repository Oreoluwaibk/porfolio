import React from 'react';
import Footer from '../reusable/Footer';
import Header from '../reusable/Header';

const About = () => {
    return (
    <div className="m-0 p-0 relative h-screen">
        <Header />
        <div className="px-52 py-1 flex-1 space-y-10">
            <h1 className="text-6xl"> About Me</h1>  
            {/* <h2 className="text-4xl">I am an Engineer</h2> */}
            <p className="text-lg">Everything started in 2019, where I saw</p>
        </div>
        <Footer />
    </div>)
}

export default About