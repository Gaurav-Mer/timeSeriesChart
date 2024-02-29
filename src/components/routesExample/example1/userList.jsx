import React from 'react'

const UserList = () => {
    const userList = [{ name: "first one", followers: 232 }, { name: "first one", followers: 232 }, { name: "first one", followers: 232 }, { name: "first one", followers: 232 }]
    return (
        <div>
            {userList?.map((item) => {
                return (
                    <li style={{ padding: 10 }}>
                        {item?.name}   <span>{item?.followers}</span>
                    </li>
                )
            })}
        </div>
    )
}

export default UserList
