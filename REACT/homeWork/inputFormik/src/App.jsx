import { useState } from "react";
// import styles from "./App.module.css";
// // import { createElement } from "react";
// import MyComponent from "./MyComponent";
// import Rendering from './Rendering';
// import Obrabotchici from "./Obrabotchici";
// import Input from "./components/Input";
import Input2 from "./components/Input2";
// import Seelect from "./components/Select";
// import InputTest from "./components/InputTest";
// import InputFormik from "./components/InputFormik";
import InputFormik from './components/FormikYup'




export function App() {
  const [count, setCount] = useState(0)
 const DataNew = new Date().toLocaleString()

const [value, setValue] = useState('')

  return (
    < >
		{/* //ИНПУТ КОНТРОЛИРУЕМЫЙ- задал сост выше- в валуе его и в обработчик тоже // target - сокращение e.target
<input type="text"
value={value}
onChange={({target}) => setValue(target.value)}
/>

      <div className={styles.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>

	  <p>
		<MyComponent/>
		<Rendering/>
		<Obrabotchici/> */}
{/* <Input2/> */}
{/* <InputFormik/> */}

		{/* <Input/> */}
{/* <InputTest/> */}
{/* <Seelect/> */}
<InputFormik/>
{/* <InputFormik/> */}


    </>
  )
}
