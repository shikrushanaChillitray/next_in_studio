import React from 'react'
import { Link } from 'react-router-dom'
import "./contact.css"

 const contact = () => {
  return (
    <div class="contacts">``
        <div class="cardContact">
  <div class="content">
   
    <h2>Good To see you</h2>
    <p>You need Something</p>
   <Link to={"/contact"}> <button >Contact</button></Link><Link to={"/character"}> <button >Character</button></Link>
  </div>
  <img src="https://cgfrog.com/wp-content/uploads/2014/04/3d-cartoon-funny-boy.png"/>
</div>
<div><h1 style={{fontWeight:"200"}}>Welcome to </h1><h1 style={{fontWeight:"bold"}}>NEXT IN STUDIO</h1></div>
    </div>
  )
}
export default contact
