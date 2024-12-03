import React1, { useEffect } from 'react'

const Navbar = ({ color }) => {

    // Run on every rander: 
    useEffect(() => {
        alert("Run on every rander")
    })

    // Run only on first rander:
    useEffect(() => {
        alert("Hey welcome to my page. This is the first rander")
    }, [])

    // Run only when certain values change
    useEffect(() => {
        alert("Hey color was changed")
    }, [color])


// Example of cleanUp function
useEffect(() => {
alert("this is an example of cleanUp function")

  return () => {
   alert("component was unmounted")
  }
}, [])



    // useEffect(() => {
    //     alert("color was changed")
    // }, [color])

    return (
        <div>
            I'm Navbar of {color} color Heheheheheeheee
        </div>
    )
}

export default Navbar
