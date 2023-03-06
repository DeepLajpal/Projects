import { useState } from "react";
import People from './data';

const Reviews = ()=>{
    const[index, setIndex]= useState(0);
    console.log(People);
    const{id, name, job, image, text}= People[index]
    console.log(name)
    return (
        <>
        <div className="reviews">
            <div className="imgContainer">
                <img src={image} alt={name} className="img profile"></img>
                <div className="img profile-background"></div>
            </div>
        </div>
        </>
    )
}

export default Reviews;