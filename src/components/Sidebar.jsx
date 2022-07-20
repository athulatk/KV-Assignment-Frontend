import React from 'react'
import KvLogo from '../imgs/kv_logo.png'
import List from '../imgs/List.png'
import { useNavigate } from 'react-router-dom'
function Sidebar() {
  const navigate=useNavigate()
  return (
    <aside className="sidebar">
      <div className="home-logo" onClick={()=>{navigate("/employees")}}>
        <div>
          <img src={KvLogo} className="kvlogo" alt="" />
        </div>
      </div>
      <nav>
        <div className="nav-item" onClick={()=>navigate("/employees")}> <img src={List} className="nav-logo" alt="" /> Employee List</div>
      </nav>
    </aside>
  )
}

export default Sidebar