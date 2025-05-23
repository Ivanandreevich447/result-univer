//для title
export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

//для пропсов в целом
type PropsType = {
  title: string;
  tasks: TaskType[];
};

const TodoList = (props: PropsType) => {
  return (
    <>
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>

      <ul>
        {props.tasks.map(t =>
            <li>
              <input type="checkbox" checked={t.isDone} />
              <span>{t.title}</span>
              {/* <button onClick={fe} >x</button> */}
            </li>
          )
        }
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Comple</button>
      </div>
    </>
  );
};

export default TodoList;
