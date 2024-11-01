import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function TopNavigation() {

    let highlghtActiveLink = (obj) => {
        if(obj.isActive == true){
            return {backgroundColor:"brown",color:"white"};
        }
    };
  return (
   <nav>
    
    <NavLink style={(obj)=>{
       return highlghtActiveLink(obj);

    }} to="/dashboard">Dashboard</NavLink>
    <NavLink style={(obj)=>{
      return highlghtActiveLink(obj);

    }}to="/signup">Signup</NavLink>
    <NavLink style={(obj)=>{
      return highlghtActiveLink(obj);

    }}to="/tasks">Tasks</NavLink>
    <NavLink style={(obj)=>{
        return highlghtActiveLink(obj);

    }} to="/leaves">Leaves</NavLink>
    <NavLink style={(obj)=>{
      return highlghtActiveLink(obj);

    }} to="/" onClick={()=>{
        localStorage.clear();
    }}>Signout</NavLink>
   </nav>
  )
}

export default TopNavigation