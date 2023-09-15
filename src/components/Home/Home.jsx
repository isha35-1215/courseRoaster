import React, { useEffect, useState } from 'react';
import './Home.css';
import Cart from '../Cart/Cart';

const Home = () => {

    const [allCourse, setAllcourse] = useState([]);
    const [selectedCourses,setSelectedCourses]=useState([]);

    useEffect(() => {
        fetch("./data.json")
            .then((res) => res.json())
            .then((data) => setAllcourse(data));
    }, []);

    const handleSelectCourse=(course) => {
        setSelectedCourses([...selectedCourses, course]);
    }


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
                                <div key={course.id} className="card">
                                    <div className="card-img">
                                        <img className='photo' src={course.coverImg} alt="" />
                                    </div>
                                    <div className="card-content">
                                        <h2 className='card-title'>{course.courseName}</h2>
                                        <p className='about'><small>{course.about}</small>
                                        </p>
                                        <div className="info">
                                            <p><i class="fa-solid fa-dollar-sign"></i> Price: {course.price}</p>
                                            <p><i class="fa-solid fa-book-open"></i> Credit: {course.credit}</p>
                                        </div>
                                    </div>
                                    <button 
                                    onClick={()=> handleSelectCourse(course)}
                                    className='card-btn'
                                    >
                                        Select
                                        </button>
                                </div>
                            ))
                        }

                    </div>
                    <div className="cart">
                        <Cart selectedCourses={selectedCourses}></Cart>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home; 