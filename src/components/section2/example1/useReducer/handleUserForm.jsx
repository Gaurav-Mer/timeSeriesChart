import React, { useReducer } from 'react'
import { formReducer, initalFormData } from './reducerLogic';

const HandleUserForm = () => {
    
    const [formData, formDispatch] = useReducer(formReducer, initalFormData);

    const handleData = (e) => {
        formDispatch({
            type: "HANDLE_CHANGE", payload: {
                key: e.target.name,
                value: e.target.value || ""
            }
        })
    };

    const handleClear = () => {
        formDispatch({ type: "CLEAR_FIELD", payload: { key: "name" } })
    }

    return (
        <div>
            <h1>Form Data is -</h1>
            <input onChange={handleData} type="text" name='name' value={formData?.name} />
            <input onChange={handleData} type="text" name='email' value={formData?.email} />
            <input onChange={handleData} type="text" name='password' value={formData?.password} />
            <input onChange={handleData} type="text" name='phone' value={formData?.phone} />
            <button onClick={handleClear}>clear all field</button>
        </div>
    )
}

export default HandleUserForm;
