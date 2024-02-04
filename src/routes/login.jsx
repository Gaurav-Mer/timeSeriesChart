import React, { useState } from 'react'

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });

    const handleData = (e) => {
        setData(prev => ({ [e.target.name]: e.target.value }))
    }
    
    return (
        <>
            <h2>Login here!</h2>
            <div style={{ display: 'flex', gap: 10, flexDirection: "column", width: "300px", marginBottom: 10 }}>
                <input placeholder='enter email' name='email' value={data?.email} onChange={handleData} />
                <input placeholder='enter password' name='password' value={data?.password} onChange={handleData} />
            </div>

            <button style={{ marginLeft: 100, cursor: "pointer", padding: 10, background: 'orange', color: 'white', border: "none" }}>Submit</button>
        </>
    )
}

export default Login;
