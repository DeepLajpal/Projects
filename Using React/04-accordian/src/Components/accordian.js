import { useState } from "react";
import { AiOutlineMinus , AiOutlinePlus } from 'react-icons/ai';


const Accordian = ({info , title})=>{
    const [show , setShow] = useState(false);
  

    return(
        <div className="qna-container">
            <h3 className="question">{title}</h3>
            <button className="plusButton" onClick={()=>setShow(!show)}>
                {show? <AiOutlineMinus/>: <AiOutlinePlus/>}
                </button>
            {show && <p className="answer">{info}</p>}
        </div>
        
    )
}

export default Accordian;