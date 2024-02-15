import React, { useEffect, useReducer } from 'react'
import { handleFormDispatch } from './reducerManagement/formData'

const Form = () => {
    const [formData, dispatch] = useReducer(handleFormDispatch, { name: "", email: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: "HANDLE_CHANGE", payload: { name, value: value || '' } });
    };

    useEffect(() => {
        let editData = { name: "gaurav mer ", email: "testing@gmail.com", password: "2324242" }
        dispatch({ type: "SET_EDIT_DATA", payload: editData })
    }, []);

    return (
        <div>
            <h3 style={{ display: 'flex', justifyContent: 'center' }}>Handle form using useReducer</h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 15, padding: 10 }}>
                <input type="text" onChange={handleChange} value={formData?.name} name='name' placeholder='Enter name' />
                <input type="text" onChange={handleChange} value={formData?.email} name='email' placeholder='Enter email' />
                <input type="text" onChange={handleChange} value={formData?.password} name='password' placeholder='Enter Password' />
            </div>
        </div>
    )
}

export default Form
