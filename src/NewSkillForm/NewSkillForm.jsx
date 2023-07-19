import { useState } from "react";
import "./NewSkillForm.css";
export default function NewSkillForm({addSkill}) {
  const [skill, setSkill] = useState({
    name: "",
    level: "3",
  });

  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    console.log(e.target.value);

    setSkill({
      ...skill,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault(); // stops the form from making an http request!
    // This function runs when the user submits the form!
    // console.log('handleSubmit function running')
    // console.log(formatUserObj(user))
    // To pass state or information to the parent component
    // call the function from the parent (passed by props), and pass into
    // the information the parent component wants

    if (skill.name === "" || skill.level === "") {
      // using return here, to stop the function and not run the code
      // after the if statement, because the user forget to fill out something
      return setErrorMessage("Please fill out each input before you submit!");
    }
console.log(skill)
    addSkill(skill);
    // everything was good make sure you clear any previous errorMessages
    setErrorMessage('');
    //clear out form
    setSkill({
        name:'',
        level:'3',
    })
  }

  return (
    <>
      <span>{errorMessage ? errorMessage : ""}</span>
      <form onSubmit={handleSubmit}>
        <label>
          Skill
          <input type="text" value={skill.name} name="name" onChange={handleChange} />
        </label>
        <label>
          Level
          <select name="level" onChange={handleChange} value={skill.level}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </label>
        <button>ADD SKILL</button>
      </form>
    </>
  );
}
