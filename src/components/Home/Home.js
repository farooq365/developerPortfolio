import React from 'react';
import About from '../About/About';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <div className="container" style={{ marginTop: '50px' }}>
                <About />
            </div>
        </div>
    );
};

export default Home;