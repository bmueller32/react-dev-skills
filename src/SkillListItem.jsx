import "./SkillListItem.css"
export default function SkillListItem({skill}) {
  return <li className="SkillListItem">{skill.name}<span className="level">{skill.level}</span></li>;
}
