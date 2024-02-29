import React from 'react'
import { useParams } from 'react-router-dom'

const SingleUser = () => {
    const { id } = useParams();
    return (
        <div>
            Hey there i am single user
            <h4 style={{ marginLeft: 200 }}>{id}</h4>
        </div>
    )
}

export default SingleUser
