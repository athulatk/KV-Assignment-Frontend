import React from 'react'
import KvLogo from '../imgs/kv_logo.png'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
function LandingPage() {
    const navigate=useNavigate();
    return (
        <>
            <header className='landing-header'>
                <img src={KvLogo} alt="" />
            </header>
            <section className='landing-main'>
                <h2>KeyValue</h2>
                <h1>Employee Application</h1>
                <Button label="Login" className="btn primary-btn" style={{ marginRight: 0, marginTop: "2em" }} onClick={()=>{navigate('/login')}} />
            </section>

        </>
    )
}

export default LandingPage