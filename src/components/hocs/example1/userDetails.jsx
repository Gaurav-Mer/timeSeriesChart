import { useEffect } from "react";

const UserDetails = ({ userData }) => {
    useEffect(() => {
        console.log("IAM USER DETAILS");
    }, [])
    return (
        <>
            <div style={{ background: "lightblue", padding: 20, marginTop: 10, borderRadius: 10 }}>
                <h3>user name is : {userData?.name}</h3>
                <h3>user email is : {userData?.email}</h3>
            </div>

        </>
    )
}
export default UserDetails;
