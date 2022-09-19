import React ,{useState} from "react";
import './New.css'


function Fun(){
  const [count,setCount] = useState(0);
  return(
    
    <React.Fragment  >
      <div className="class1">
    <h1>So the value is :  {count}</h1>
    <br></br>
    <button onClick={() =>(setCount(0)) }>Reset</button>
    <br></br>
    <button onClick={() =>(count >= 20 ?"":setCount(count+1))}>Increase</button>
    <br></br>
    <button onClick={() =>(count<=0 ? "" : setCount(count-1))}> Decrease</button>
    </div>
    </React.Fragment>
  

  )
 
}

export default Fun;

