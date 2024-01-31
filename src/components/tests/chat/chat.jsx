import { useState } from "react";
import ChatList from "./chatList";
import DoChat from "./doChat";

export default function Chat() {
    const [chatWith, setChatWith] = useState(contacts[0]);

    const handleData = (data) => {
        setChatWith(data)
    }
    return (<div style={{ display: "flex", gap: 50 }}>
        <div style={{ width: 140, marginTop: 120, display: 'flex', flexDirection: 'column' }}>
            <ChatList handleData={handleData} contacts={contacts} />
        </div>
        <div style={{ width: "300px", marginTop: 120 }}><DoChat chatWith={chatWith} /></div>

    </div>)
}

const contacts = [
    { name: 'Taylor', email: 'taylor@mail.com' },
    { name: 'Alice', email: 'alice@mail.com' },
    { name: 'Bob', email: 'bob@mail.com' }
];