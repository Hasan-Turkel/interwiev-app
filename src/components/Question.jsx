import data from "../helpers/data";
import Accord from "./Accord";

console.log(data);

const Question = () => {
  return (
    <main>
      {data.map((data, id)=>( <Accord key={id} {...data}/>))} 
    </main>
  )
}

export default Question