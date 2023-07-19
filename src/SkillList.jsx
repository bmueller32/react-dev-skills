import SkillListItem from "./SkillListItem";
export default function SkillList({ skills }) {
  //app logic goes here

  //return UI as JSX
  const skillListItems = skills.map((s,idx) => <SkillListItem skill={s} key={idx} />);
  return <ul>{skillListItems}</ul>;
}
