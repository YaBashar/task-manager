import { TaskItem } from "./TaskItem";

export function TaskList({ tasks, onToggleDialog }) {
  return (
    <>
      <ul className="taskList">
        {tasks.map((task) => (
          <TaskItem
            title={task.title}
            description={task.description}
            dueDate={task.dueDate}
            isExpand={true}
          />
        ))}

        <div className="addItem">
          <p onClick={onToggleDialog}>Add New Task ➕</p>
        </div>
      </ul>
    </>
  );
}
