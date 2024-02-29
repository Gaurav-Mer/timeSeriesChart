import React from 'react'
import { useParams } from 'react-router-dom';

const CreateUser = () => {
    const name = useParams();
    return (
        <div style={{ backgroundColor: "red" }}>
            I am create user
            create user here
        </div>
    )
}

export default CreateUser
