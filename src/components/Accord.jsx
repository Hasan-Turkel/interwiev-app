import { useState } from "react"
import { arrowdown } from "../helpers/icons"
import { arrowup } from "../helpers/icons"

const Accord = ({id,  question, answer}) => {
    const [flag, setFlag] = useState(true);
  return (
    <article>
        <div><h2>{id}. {question}</h2>
        <aside onClick={()=> setFlag(!flag)}> {flag? (<span>{arrowdown}</span>): (<span>{arrowup}</span>)}
        </aside>
       </div>
        {!flag && <h3>{answer}</h3>}
    </article>
    
  )
}

export default Accord