import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState("rupesh")
  const [form,setForm] = useState({email:"",phone:""})

  const handleClick = () => {
    alert("Hey I'm clicked")
  }

  const handelMouseOver = () => {
    alert("I'm a Mouse Over")
  }

  const handleChange = (e) => {
    // setName(e.target.value)
    setForm({...form,[e.target.name]:e.target.value})

  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click</button>
      </div>

      {/* <div className="red" onMouseOver={handelMouseOver}>
        This is a box
      </div> */}

      <input type="text" name='email' value={form.email?form.email:""} onChange={handleChange} />
      <input type="text" name='phone' value={form.phone?form.phone:""} onChange={handleChange} />
    </>
  )
}

export default App
