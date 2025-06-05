import { Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";

export function Form({ onToggleDialog, isOpen, onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !description || !date) {
      alert("Missing Input");
      return;
    }

    if (description.length > 60) {
      alert("Description Too Long Please Keep Description to 60 characters");
      return;
    }

    const task = { title, description, dueDate: date, isExpand: true };
    console.log(task);
    onAddTask(task);

    setTitle("");
    setDescription("");
    setDate("");
  }

  return (
    <Dialog open={isOpen} onClose={onToggleDialog} className="dialogOverlay">
      <div className="dialogWrapper">
        <DialogPanel className="dialogPanel">
          <button class="close" onClick={onToggleDialog}>
            ❌
          </button>
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
              placeholder="Add Task Description 60 Characters Max"
            ></input>

            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              placeholder="Add Due Date"
            ></input>
            <button class="submit" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
