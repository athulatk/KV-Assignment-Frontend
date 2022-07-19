import '../styles/styles.css'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import KvLogo from '../imgs/kv_logo.png'
import LoginImg from '../imgs/sidepic.png'
const Login = () => {
    const [loginDetails, setLoginDetails] = useState({
        username: '',
        password: ''
    })
    const navigate = useNavigate()
    return (
        <>
            <aside className="sidebar-login">
                <img src={LoginImg} alt="" />
            </aside>
            <div className="main-login">
                <div>
                    <div>
                        <img src={KvLogo} alt="" />
                    </div>
                    <input type="text" placeholder="UserName" onChange={(e) => { setLoginDetails({ ...loginDetails, username: e.target.value }) }}/>
                    <input type="password" placeholder="Password" onChange={(e) => { setLoginDetails({ ...loginDetails, password: e.target.value }) }}/>
                    <button className="btn primary-btn" style={{width:'45%',marginLeft:'0px',marginRight:'0'}} onClick={()=>{navigate('/employees')}}>Login</button>
                </div>
            </div>

        </>

    )
}
export default Login