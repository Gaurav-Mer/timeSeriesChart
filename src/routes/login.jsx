import React, { useState } from 'react'
import useUploadData from '../components/hooks/apiRequest/useUploadData';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUsername } from '../reduxConfig/slices/userSlice';

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const { loading, error, uploadData } = useUploadData();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleData = (e) => {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const redirectToHome = (respData) => {
        dispatch(updateUsername({ userData: respData }));
        return navigate("/register");
    }
    const submitData = async () => {
        uploadData("https://todo-list-backend-3ytm.onrender.com/login", { email: "gouravmer22@gmail.com", password: "1234" }, redirectToHome);
    }

    return (
        <>
            <h2>Login here!</h2>
            <div style={{ display: 'flex', gap: 10, flexDirection: "column", width: "300px", marginBottom: 10 }}>
                <input placeholder='enter email' name='email' value={data?.email} onChange={handleData} />
                <input placeholder='enter password' name='password' value={data?.password} onChange={handleData} />
            </div>

            <button onClick={submitData} disabled={loading} style={{ marginLeft: 100, cursor: "pointer", padding: 10, background: 'orange', color: 'white', border: "none" }}>Submit</button>
            {loading ? <h6>i am loading..</h6> : ""}
            {error ? <h6>SOMETHING went wrong!</h6> : ""}
        </>
    )
}

export default Login;
