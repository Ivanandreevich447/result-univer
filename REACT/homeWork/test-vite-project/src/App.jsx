import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createElement } from "react";

// export function DataNew() {
// 	return (
// 	 <p>
//  {new Date().toLocaleString() + ""}
// 	 </p>
// 	);
//   }

// export function App() {
//   const [count, setCount] = useState(0)
// //  const DataNew = new Date().toLocaleString()
//   return (
//     <>
// 	{/* тут className и название картинок  вместо пути и в целом файл создан с помощью vite - файл jsx - декларативный стиль использует*/}
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>

//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
// 	  {/* <DataNew /> */}
// 	  <p>
// 		сейчас у  нас <br />

// {/* дату создаю импертивным стилем мне кажется/ тут как оыбчно выведи дату - выведи только год */}
// 	  { new Date().getFullYear() }
// 	  <br />
// 	  год

// 	  </p>
//     </>
//   )
// }

export function App() {
	const [count, setCount] = useState(0);
	return createElement(
		"div",
		null,

		createElement(
			"a",
			{ href: "https://vite.dev", target: "_blank" },

			createElement("img", {
				src: viteLogo,
				className: "logo",
				alt: "Vite logo",
			})
		),

		createElement(
			"a",
			{ href: "https://react.dev", target: "_blank" },

			createElement("img", {
				src: reactLogo,
				className: "logo react",
				alt: "React logo",
			})
		),
		createElement("h1", null, "Vite + React"),

		createElement(
			"div",
			{ className: "card" },
			createElement(
				"button",
				{
					onClick:() => setCount((count) => count + 1),
				},
				`count is ${count}` //обратные ковычки!!
			),
			createElement(
				"p",
				null,
				"Edit",
				createElement(
					"code",
					{src: "/App.jsx"},
					"and save to test HMR"
				)

			)
		),
		createElement(
			"p",
			{ className: "read-the-docs" },
			"Click on the Vite and React logos to learn more"
		),

		createElement("p",
			{className: "dataText"},
			null, new Date().getFullYear())
	);
}
