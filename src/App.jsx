import SkillList from "./SkillList";
import { useState } from "react";
import "./style.css";
import SkillListItem from "./SkillListItem";
import NewSkillForm from "./NewSkillForm/NewSkillForm";

const skills = () => {
  //{ name: "HTML", level: 5 },
  //{ name: "CSS", level: 3 },
  //{ name: "JavaScript", level: 4 },
  //{ name: "Python", level: 2 },
};

function App() {
  const [count, setcount] = useState(0);

  const [skillsObj, setSkillsObj] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ]);

  // generating a list of UserListItem components representing every object in
  // our user state!
  const skillListItems = skillsObj.map((sObj, idx) => {
    // return value is the new array item in the skillListItems variable
    return <SkillListItem student={sObj} key={idx} />;
  });
  console.log(skillListItems)

  // if we want data from a child component
  // we must create a function that we pass down as a prop to that component
  // and when its called in that child component, data can passed up to the parent
  function addSkill (skillFromTheForm){
    console.log(skillFromTheForm, ' skill From The Form');// this log occurs
    // when the user hits the form addSkill button

    setSkillsObj([
      ...skillsObj, // this puts the new skill at the end of the array
    skillFromTheForm // Spread operator
    ])
  }
console.log(skillsObj)
  return (
    <>
      <div className="App padding-0 teal-text">
        <h1>React Dev Skills</h1>
         <SkillList skills={skillsObj} />  

        <hr />
        <NewSkillForm addSkill={addSkill}/>
      </div>
    </>
  );
}
export default App;
