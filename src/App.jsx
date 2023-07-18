import SkillList from "./SkillList";
import { useState } from "react";
import "./style.css";
import NewSkillForm from "./NewSkillForm";

const skills =() => {
 
  
  //{ name: "HTML", level: 5 },
  //{ name: "CSS", level: 3 },
  //{ name: "JavaScript", level: 4 },
  //{ name: "Python", level: 2 },
}

function App() {
  const[count, setcount] = useState(0)

  const[skillsObj, setSkillsObj] = useState([
{ name: "HTML", level: 5 },
{ name: "CSS", level: 3 },
{ name: "JavaScript", level: 4 },
{ name: "Python", level: 2 },
])

  return (
    <>
    <div className="App padding-0 teal-text">
      <h1>React Dev Skills</h1>
      <SkillList skills={skillsObj}/>

      <hr />
      <NewSkillForm/>

    </div>
    </>
  )
  }
export default App ;


