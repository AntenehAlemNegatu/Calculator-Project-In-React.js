import {useState} from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const ops = ["/", "*", "+","-", "."];
  const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
  
  const updateCalc = value => {
    if(ops.includes(value) && calc === "" || 
    ops.includes(value) && ops.includes(calc.slice(-1))){
      return;
    }
    setCalc(calc + value);
     
  }
  
  const createDigits = () => {
    const digits = [];
    for(let i = 1; i < 10; i++){
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key = {i}>{i}</button>
      )
    }
    return digits;
  }
  const calculate = () => {
    
    setCalc(eval(calc).toString());
  }
  
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>{result}</span> : "" }{calc || "0"}
        </div>
        <div className="operators">
          <button onClick = {() => updateCalc("/")}>/</button>
          <button onClick = {() => updateCalc("*")}>*</button>
          <button onClick = {() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button>AC</button>

        </div>
        <div className="digits">
             {createDigits()}
        </div>
        
        
           <div className="sign">
              <button onClick={() => updateCalc("0")}>0</button>
              <button onClick={() => updateCalc(".")}>.</button>
              <button onClick={calculate}>=</button>
       
           </div>
            
        </div>
    </div>
        
    
  );
}

export default App;
