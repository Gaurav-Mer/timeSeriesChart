import { useState } from "react"

export default function Hoc(InputComp) {
    const WrapperComponet = (props) => {
        const [data, setData] = useState("");
        console.log("props is ", props?.compType);
        return (
            <>
                {props?.compType === "first" ? <div>I Will only visible to comp 1 else can not even see this text</div> : ""}
                <InputComp {...props} data={data} />
            </>
        )
    }

    return WrapperComponet;
}
