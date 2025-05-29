import './index.css';

const tasks = [
  {
    title: "Task 1",
    description: "Do Task 1",
    dueDate: "30/05"
  },

  { 
    title: "Task 2",
    description: "Do Task 2",
    dueDate: "30/05"
  },

  { 
    title: "Task 3",
    description: "Do Task 2",
    dueDate: "30/05"
  }
]

function App() {
  return (
   <div className = "container">
      <SidePanel />
      <MainPanel />
   </div>
  );
}

function MainPanel() {
  return (
    <div className = "mainPanel">
      <DatePanel />
      <TaskList />
    </div>
  )
}

function SidePanel() {
  return (
  
    <div className = "sidePanel">
      <h2>Mubashir 😊</h2>

      <ul className = "sideList">
        {tasks.map((task) =>  
          <li>{task.title}</li>   
        )}
      </ul>
    </div>
     
  )
}



function DatePanel() {

  const date = new Date()

  return (
    <div className = "datePanel">
      <p>Welcome</p>
      <p>Today is {date.toDateString()}</p>
    </div>
  )
}

function TaskList() {
  return (
    <ul className = "taskList">
      {tasks.map((task) => 
        <TaskItem 
          title = {task.title} 
          description = {task.description}
          dueDate = {task.dueDate}
          />
        )}

        <div className="addItem">
          <p>Add New Task ➕</p>
        </div>
    </ul>
  )
}

function TaskItem({title, description, dueDate}) {
  return (
    <li className = "taskItem">
      <p>{title} 🪜</p>
      <p>{description}</p>
      <p>{dueDate} <input className = "checkbox" type = "checkbox"></input></p>
    </li>
  )
}

export default App;
