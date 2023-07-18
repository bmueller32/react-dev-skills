import SkillListItem from "./SkillListItem";
export default function SkillList({ skills }) {
  //app logic goes here

  //return UI as JSX
  const skillListItems = skills.map((s) => <SkillListItem skill={s} />);
  return <ul>{skillListItems}</ul>;
}
