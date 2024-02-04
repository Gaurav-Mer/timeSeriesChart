export default function ChatList({ contacts,handleData }) {
    return (<>
        {contacts?.map((item) => {
            return (
                <button onClick={()=>handleData(item)} style={{ textDecoration: "none", textTransform: "none", padding: 10, marginTop: 10 }}>{item?.name}</button>
            )
        })}
    </>)
}

