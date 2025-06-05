import { useState } from "react";
import "../index.css"
import { MainPanel } from "./MainPanel";
import { SidePanel } from "./SidePanel";
import { Form } from "./Form";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  function toggleDialog() {
    setIsOpen(!isOpen);
  }

  function addTask(task) {
    console.log(task);
    setTasks((tasks) => [...tasks, task]);
  }

  return (
    <div className="container">
      <SidePanel tasks={tasks} />
      <MainPanel tasks={tasks} onToggleDialog={toggleDialog} />
      <Form isOpen={isOpen} onToggleDialog={toggleDialog} onAddTask={addTask} />
    </div>
  );
}

export default App;
