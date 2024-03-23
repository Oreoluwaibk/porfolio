import React from 'react';
import Footer from '../reusable/Footer';
import Header from '../reusable/Header';

const Resume = () => {
    return (
    <div className="m-0 p-0 relative h-screen">
        <Header />
        <div className="px-52 py-1 flex-1 space-y-10">
            <div className="myexperience">
                <h3>My Experience</h3>
            </div>
            <div className="mylearning">

            </div>
        </div>
        <Footer />
    </div>)
}

export default Resume;