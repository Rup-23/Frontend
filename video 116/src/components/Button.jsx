import React,{useContext} from 'react'
import Componenet_1 from './Componenet_1'
import { counterContext } from '../context/context'

const Button = () => {
    const value = useContext(counterContext)
  return (
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}><span><Componenet_1 /></span>I'm a button</button>
    </div>
  )
}

export default Button
