import React from 'react';
import './Cart.css';

const Cart = ({ selectedCourses,remaining,totalCount }) => {

    return (
        <div className='card cart'>
            <h4>Credit Hour Remaining :{remaining}</h4>
            <h3>Course Name</h3>
            {selectedCourses.map((course,index) => (
        <ol key={course.id} className='course-list'>{`${index + 1}. ${course.courseName}`}</ol>
      ))}

            <h4>Total Credit Hour : {totalCount}</h4>
            
        </div>
    );
};

export default Cart;
