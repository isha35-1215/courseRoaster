import React, { useEffect, useState } from 'react';
import './Home.css';
import Cart from '../Cart/Cart';

const Home = () => {

    const [allCourse, setAllcourse] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [totalCount, setTotalCount] = useState(0);


    useEffect(() => {
        fetch("./data.json")
            .then((res) => res.json())
            .then((data) => setAllcourse(data));
    }, []);

    const handleSelectCourse = (course) => {
        const isExist = selectedCourses.find((item) => item.id == course.id);
        let count = course.credit;


        if (isExist) {
            return alert("Already Taken!");
        } else {
            selectedCourses.forEach((item => {
                count += item.credit;
            }));

            const remaining = 20 - count;

            if(count>20){
                return alert("Credit Limit can't be Exceeded!");
            }
            else{
                setTotalCount(count);
            }

            setRemaining(remaining);

            setSelectedCourses([...selectedCourses, course]);

        }
    };


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
                                            <p><i class="fa-solid fa-book-open"></i> Credit: {course.credit}hr</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleSelectCourse(course)}
                                        className='card-btn'
                                    >
                                        Select
                                    </button>
                                </div>
                            ))
                        }

                    </div>
                    <div className="cart">
                        <Cart
                            selectedCourses={selectedCourses}
                            remaining={remaining}
                            totalCount={totalCount}>
                        </Cart>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home; 