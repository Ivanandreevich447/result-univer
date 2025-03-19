import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createElement } from "react";
import MyComponent from "./MyComponent";

// export function DataNew() {
// 	return (
// 	 <p>
//  {new Date().toLocaleString() + ""}
// 	 </p>
// 	);
//   }

export function App() {
  const [count, setCount] = useState(0)
//  const DataNew = new Date().toLocaleString()
  return (
    <>
	{/* тут className и название картинок  вместо пути и в целом файл создан с помощью vite - файл jsx - декларативный стиль использует*/}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
	  {/* <DataNew /> */}
	  <p>
		сейчас у  нас <br />

{/* дату создаю импертивным стилем мне кажется/ тут как оыбчно выведи дату - выведи только год */}
	  { DataNew }
	  <br />
	  год

	  </p>
	  <p>
		<MyComponent/>
	  </p>
    </>
  )
}
