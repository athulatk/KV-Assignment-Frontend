import React from 'react'
import KvLogo from '../imgs/kv_logo.png'
import List from '../imgs/List.png'
import { useNavigate } from 'react-router-dom'
function Sidebar() {
  const navigate=useNavigate()
  return (
    <aside class="sidebar">
      <div class="home-logo" onClick={()=>{navigate("/")}}>
        <div>
          <img src={KvLogo} class="kvlogo" alt="" />
        </div>
      </div>
      <nav>
        <div class="nav-item" onClick={()=>navigate("/employeelist")}> <img src={List} class="nav-logo" alt="" /> Employee List</div>
      </nav>
    </aside>
  )
}

export default Sidebar