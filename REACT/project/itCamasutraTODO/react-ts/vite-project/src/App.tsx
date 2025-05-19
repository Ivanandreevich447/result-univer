import styles from "./App.Module.css";
import TodoList from "./TodoList";
import { TaskType } from "./TodoList";


const App = () => {
  const tasks1: TaskType[] = [
    { id: 1, title: "TS", isDone: false },
    { id: 2, title: "CSS", isDone: true },
    { id: 3, title: "JS", isDone: true },
    { id: 3, title: "JS", isDone: true },
  ];
  // const tasks2: TaskType[] = [
  //   { id: 1, title: "shrek", isDone: false },
  //   { id: 2, title: "xxx", isDone: false },
  //   { id: 3, title: "terminator", isDone: true },
  //   { id: 3, title: "terminator", isDone: true },
  // ];

  return (
    <div className={styles.container}>
      <TodoList title="что учу" tasks={tasks1} />
      {/* <TodoList title="movies" tasks={tasks2} /> */}

    </div>
  );
};

export default App;
