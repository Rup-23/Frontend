import React,{useContext} from 'react'
import { counterContext } from '../context/context'

const Componenet_1 = () => {
    const value = useContext(counterContext)
  return (
    <div>
   {value.count}
    </div>
  )
}

export default Componenet_1
