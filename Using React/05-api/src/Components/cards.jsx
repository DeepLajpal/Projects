
import { useState } from "react";

export default function Cards() {
  const [data, setData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [column, setColumn] = useState(4);

  const handleOpenModal = (card) => {
    setSelectedCard(card);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
    document.body.style.overflow = 'auto';
  };
  const increaseColumn = () => {
    setColumn(column+1);
     }
  const decreaseColumn = () => {
    
        setColumn(column-1);
     }

  const arrayOfCards = data?.map((card) => {
    return (
      <div
        className="item"
        onClick={() => handleOpenModal(card)}
        key={card.id}
      >
        <h1>Body</h1>
        <p>{card.body}</p>
        <h1>Title</h1>
        <p>{card.title}</p>
      </div>
    );
  });

  const selectedCardModal = selectedCard && (
    <div className="modal-overlay" onClick={handleCloseModal}>
      <div className="modal">
        <h1>{selectedCard.title}</h1>
        <p>{selectedCard.body}</p>
      </div>
    </div>
  );

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  };

  const boxStyle = {
    gridTemplateColumns: `repeat(${column}, 1fr)`,
  };


  return (
    <>
    <div className="layoutSetting">
        <button onClick={increaseColumn}>Increase Column</button>
        <p>{column}</p>
        <button onClick={decreaseColumn}>Decrease Column</button>

    </div>
      <div className="box" style={boxStyle}>{arrayOfCards}</div>
      {selectedCardModal}
      <button onClick={fetchData}>Fetch Data</button>
    </>
  );
}