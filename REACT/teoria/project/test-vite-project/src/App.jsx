import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.css";
import { createElement } from "react";
import MyComponent from "./MyComponent";
import Rendering from './Rendering';
import Obrabotchici from "./Obrabotchici";



export function App() {
  const [count, setCount] = useState(0)
 const DataNew = new Date().toLocaleString()
  return (
    < >
	{/* тут className и название картинок  вместо пути и в целом файл создан с помощью vite - файл jsx - декларативный стиль использует*/}
	<div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
		{/* он сам дал уникальное имя классу css */}
          <img src={reactLogo} className={styles.logo} alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className={styles.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>

	  <p>
		<MyComponent/>
		<Rendering/>
		<Obrabotchici/>
	  </p>
    </>
  )
}
