import { useState } from "react";
import People from './data';
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';



const Reviews = ()=>{
    const[index, setIndex]= useState(0);
    const{name, job, image, text}= People[index]

    const checkNumber=(Index)=>{
        if(Index<0){
            return People.length-1;
        }
        if(Index>People.length-1){
            return 0;
        }
        return Index;
    }

    const nextReview = (e)=>{
            setIndex(index => {
                var newIndex=index-1;
                return(checkNumber(newIndex))
            });
        
    };
    const previousReview = (e)=>{
        setIndex(index => {
            var newIndex=index+1;
            return(checkNumber(newIndex))
        });
    };
    
    const randomReview = ()=>{
            setIndex(index=>{

            var newIndex=Math.floor(Math.random() *4);
            if (newIndex===index){
                newIndex=index+1;
            }
            return checkNumber(newIndex);
        })
    }

    

    return (
        <>
        <div className="reviews">
            <div className="img-container" >
                <img src={image} alt={name} className="person-img"></img>
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="person-name">{name}</h4>
            <p className="person-job">{job}</p>
            <p className="person-text">{text}</p>
            <div className='btn-container'>
                <button className='btn arrow left-arrow' onClick={nextReview}>
                <FaChevronLeft/>
                </button>
                <button className='btn arrow right-arrow' onClick={previousReview}>
                <FaChevronRight/>
                </button>
            </div>
            <button className='btn random-btn' onClick={randomReview}>surprise me</button>
        </div>
        </>
    )
}

export default Reviews;