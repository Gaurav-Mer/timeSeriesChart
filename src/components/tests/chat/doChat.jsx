import { useState } from "react"

export default function DoChat({ chatWith }) {
    const [data, setData] = useState("")
    return (
        <div style={{ display: 'flex', flexDirection: "column", gap: 20 }}>
            <textarea value={data} onChange={(e) => setData(e.target.value)} placeholder={`please do chat with ${chatWith?.name}`} rows={8} />
            <button style={{ backgroundColor: "orange", padding: 10 }}>Send msg {chatWith?.name} </button>
        </div>
    )
}