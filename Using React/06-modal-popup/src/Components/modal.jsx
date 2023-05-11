import { useRef, useState } from "react";

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef(null);


    function onOpenHandler(event) {
        buttonRef.current.style.display='block';
    }
    function onCloseHandler(event) {
        buttonRef.current.style.display='none';
    }

    return (
        <>
        <img src="../image.jpg" alt="" />
            <div className="container">
                <button className="button" onClick={onOpenHandler}>
                    Click me
                </button>
                <div ref={buttonRef} className="popup">
                <button className="button" onClick={onCloseHandler}>
                    Close me!
                </button>
                </div>
            </div>
        </>
    )
}

export default Modal;