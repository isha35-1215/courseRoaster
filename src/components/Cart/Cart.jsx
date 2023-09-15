import React from 'react';
import './Cart.css';

const Cart = ({ selectedCourses }) => {
    console.log(selectedCourses);

    return (
        <div>
            <ol>
                {selectedCourses.map((course) => (
                    <li key={course.id}>{course.courseName}</li>
                ))}
            </ol>
            <h4>Total Credit Hour : {selectedCourses.length}</h4>
            
        </div>
    );
};

export default Cart;
