import { useState } from "react";
import People from './data';
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const Reviews = ()=>{
    const[index, setIndex]= useState(2);
    console.log(People);
    const{id, name, job, image, text}= People[index]
    console.log(name)
    return (
        <>
        <div className="reviews">
            <div className="img-container">
                <img src={image} alt={name} className="person-img"></img>
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="person-name">{name}</h4>
            <p className="person-job">{job}</p>
            <p className="person-text">{text}</p>
            <div className='btn-container'>
                <button className='btn arrow left-arrow'>
                <FaChevronLeft/>
                </button>
                <button className='btn arrow right-arrow'>
                <FaChevronRight/>
                </button>
            </div>
            <button className='btn random-btn'>surprise me</button>
        </div>
        </>
    )
}

export default Reviews;