import React, { useEffect, useState } from 'react';
import './Home.css';
import Cart from '../Cart/Cart';

const Home = () => {

    const [allCourse, setAllcourse] = useState([]);

    useEffect(() => {
        fetch("./data.json")
            .then((res) => res.json())
            .then((data) => setAllcourse(data));
    }, []);


    return (
        <div className="home-body">
            <div className="home-header">
                <h1>Course Registration</h1>
            </div>
            <div className='container'>
                <div className='home-container'>
                    <div className="card-container">
                        {
                            allCourse.map((course) => (
                                <div className="card">
                                    <div className="card-img">
                                        <img className='photo' src="https://i.ibb.co/kcdTTPf/web.jpg" alt="" />
                                    </div>
                                    <div className="card-content">
                                        <h2 className='card-title'>Web Development Fundamentals</h2>
                                        <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, facere.</small>
                                        </p>
                                        <div className="info">
                                            <p>Price: 35000</p>
                                            <p>Credit: 2hr</p>
                                        </div>
                                    </div>
                                    <button className='card-btn'>Select</button>
                                </div>
                            ))
                        }

                    </div>
                    <div className="cart">
                        <h1>this is cart</h1>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home; 