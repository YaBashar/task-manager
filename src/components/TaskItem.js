export function TaskItem({ title, description, dueDate, isExpand }) {
  return (
    <li className={isExpand ? "taskItem" : "sideItem"}>
      <p>
        {title}{" "}
        {isExpand && <input className="checkbox" type="checkbox"></input>}{" "}
      </p>
      {isExpand && <p>{description}</p>}
      {isExpand && <p>Due By: {dueDate} </p>}
    </li>
  );
}
