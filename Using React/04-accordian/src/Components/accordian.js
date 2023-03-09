import { useState } from 'react';
import qna from './data';

const Accordian = ()=>{
    console.log(qna);
    const [index , setIndex]= useState(0);
    // const {info} = qna[index];
    return(
        <div className="qna-container">
            {/* <h3 className="question">{qna}</h3> */}
        </div>
    )
}

export default Accordian;