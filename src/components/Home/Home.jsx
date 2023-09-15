import React, { useEffect, useState } from 'react';
import './Home.css';
import Cart from '../Cart/Cart';

const Home = () => {

    const [allCourse, setAllCourse]= useState([]);

    useEffect(()=>{
        fetch("./data.json")
        .then((res)=>res.json())
        .then((data)=>console.log(data));
    },[]);



    return (

        

        
    );
};

export default Home; 