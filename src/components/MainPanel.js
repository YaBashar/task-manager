import { TaskList } from "./TaskList";
import { DatePanel } from "./DatePanel";

export function MainPanel({ tasks, onToggleDialog }) {
  return (
    <div className="mainPanel">
      <DatePanel />
      <TaskList tasks={tasks} onToggleDialog={onToggleDialog} />
    </div>
  );
}
