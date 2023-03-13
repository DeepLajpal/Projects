import './index';
import data from './Components/data'
import Accordian from './Components/accordian';
import { useState } from 'react';

function App() {
  const [ questions , setQuestions] = useState(data);
  return (
    <div className="App">
      <div className='container'>
        <h1 className='main-heading'>Questions</h1>

        {questions.map((question)=>{
          return <Accordian key={question.id} {...question}/>
        })
        }

        </div>
    </div>
  );
}

export default App;
