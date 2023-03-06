import { useState } from 'react';
import * as math from 'mathjs';

const InputField = () => {
  const [result, setResult] = useState("");
  const [inputValue, setInputValue] = useState("");

  function onEnter(e) {
    if (e.key === 'Enter') {
      try {
        const input = inputValue;
        const value = math.evaluate(input);
        setResult(value.toFixed(1));
      } catch (error) {
        setResult("Invalid input");
      }
    }
  }

  function validateInput(e) {
    const inputValue = e.target.value.replace(/[^0-9+\-*/%.]/g, '');
    setInputValue(inputValue);
  }

  return (
    <>
      <h3>Result: {result}</h3>
      <input type='text' placeholder="Enter Number" onKeyUp={onEnter} onInput={validateInput} value={inputValue}></input>
    </>
  );
};

export default InputField;

