import { TaskItem } from "./TaskItem";

export function SidePanel({ tasks }) {
  return (
    <div className="sidePanel">
      <h2>Mubashir 😊</h2>

      <ul className="sideList">
        {tasks.map((task) => (
          <TaskItem
            key={task}
            title={task.title}
            description={task.description}
            dueDate={task.dueDate}
            isExpand={false}
          />
        ))}
      </ul>
    </div>
  );
}
