import { arrowdown } from "../helpers/icons"
import { arrowup } from "../helpers/icons"

const Accord = ({id,  question, answer}) => {
  return (
    <article>
        <div><h3>{id}. {question}</h3>
        <aside> {arrowup}
        {arrowdown}</aside>
       </div>
        <p>{answer}</p>
    </article>
    
  )
}

export default Accord