
const Accordian = ({info , title})=>{
    console.log(info);
    
    return(
        <div className="qna-container">
            <h3 className="question">{title}</h3>
            <p className="answer">{info}</p>
        </div>
    )
}

export default Accordian;