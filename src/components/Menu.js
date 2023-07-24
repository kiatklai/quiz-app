import { useContext } from "react"
import { DataContext } from "../App"

const Menu = () =>{
  const {setAppState} = useContext(DataContext)
  return(
    <div className="menu">
      <h1>Quiz Test</h1>
      <button onClick={()=>setAppState("quiz")}>Go To Quiz</button>
    </div>
  )
}

export default Menu