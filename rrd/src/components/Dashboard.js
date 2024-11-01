import React from 'react'
import TopNavigation from './TopNavigation'
import { useLocation } from 'react-router-dom'

function Dashboard() {

  let loc = useLocation();
  console.log(loc);
  return (
    <div>
      <TopNavigation/>
        <h2>Dashboard</h2>
        <h2>{loc.state.msg}</h2>
    </div>
  )
}

export default Dashboard