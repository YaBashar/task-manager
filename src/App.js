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

  function addTask(task) {
    console.log(task)
    setTasks((tasks) => [...tasks, task]);
  }

  return (
    <div className="container">
      <SidePanel tasks={tasks} />
      <MainPanel tasks={tasks} onToggleDialog={toggleDialog} />
      <Form isOpen={isOpen} onToggleDialog={toggleDialog} onAddTask = {addTask}/>
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
            key = {task}
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

function Form({ onToggleDialog, isOpen, onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
  
    e.preventDefault();

    if(!title || !description || !date) {
      alert("Missing Input")
      return
    }

    const task = {title, description, dueDate: date, isExpand: true}
    console.log(task)

    onAddTask(task)

    setTitle("")
    setDescription("")
    setDate("")
  }

  return (
    <Dialog open={isOpen} onClose={onToggleDialog} className="dialogOverlay">
      <div className="dialogWrapper">
        <DialogPanel className="dialogPanel">

          <button class="close" onClick={onToggleDialog}>❌</button>
          <form>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Add Task Name"
            ></input>

            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              placeholder="Add Task Description"
            ></input>

            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              placeholder="Add Due Date"
            ></input>

            <button class="submit" onClick={handleSubmit}>Submit</button>
          </form>

          

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
