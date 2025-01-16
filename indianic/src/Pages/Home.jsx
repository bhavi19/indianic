import React from 'react';
import Header from '../Components/Header/Header';

const Home = () => {
    return (
        <>  <Header />
            <div style={{ textAlign: "center" }}>
                <h1 style={{ color: 'turquoise' }}>Home page</h1>
                <h1>Public content here</h1>
            </div>
        </>
    );
};

export default Home;