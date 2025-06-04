import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import "./index.css";
import { DatePanel } from "./DatePanel";


function App() {
  const [tasks, setTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  function toggleDialog() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="container">
      <SidePanel tasks={tasks} />
      <MainPanel tasks={tasks} onToggleDialog={toggleDialog} />
      <Form isOpen={isOpen} onToggleDialog={toggleDialog} />
    </div>
  );
}

function MainPanel({ tasks, onToggleDialog }) {
  return (
    <div className="mainPanel">
      <DatePanel />
      <TaskList tasks={tasks} onToggleDialog={onToggleDialog} />
    </div>
  );
}

function SidePanel({ tasks }) {
  return (
    <div className="sidePanel">
      <h2>Mubashir 😊</h2>

      <ul className="sideList">
        {tasks.map((task) => (
          <TaskItem
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

function TaskList({ tasks, onToggleDialog }) {
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

function Form({ onToggleDialog, isOpen }) {
  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <Dialog open={isOpen} onClose={onToggleDialog} className="dialogOverlay">
      <div className="dialogWrapper">
        <DialogPanel className="dialogPanel">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Add Task Name"
            ></input>
            <input type="text" placeholder="Add Task Description"></input>
            <input type="date" placeholder="Add Due Date"></input>
          </form>

          <button onClick={onToggleDialog}>Close</button>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

function TaskItem({ title, description, dueDate, isExpand }) {
  return (
    <li className={isExpand ? "taskItem" : "sideItem"}>
      <p>{title} 🪜</p>
      {isExpand && <p>{description}</p>}
      {isExpand && (
        <p>
          {dueDate} <input className="checkbox" type="checkbox"></input>
        </p>
      )}
    </li>
  );
}

export default App;
