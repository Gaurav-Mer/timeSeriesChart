import { useEffect, useRef, useState } from "react";

const UseRefExample = () => {
    const counterRef = useRef(0);
    const [value, setValue] = useState("");
    const currentRef = useRef()

    useEffect(() => {
        counterRef.current = counterRef.current + 1;
    }, [value]);

    return (
        <>
            <h1>This is an example of UseRef!</h1>
            <input ref={currentRef} type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            Initial Value: {counterRef.current}
            <div style={{ marginTop: 20 }}>
                Notes for the USEREF:
                <div>
                    <b>Use ref does not re render the component again and again if there is changes in ref alike usestate !</b> <br />
                    <b>Basically what happen is Dom gets loaded first then the useEffect gets executed</b>
                    <br /><b>It means that if i initalize the value of ref with 0 and inside the useffect i updated it by 1 then what happen is 0 is printed on first load but actual value is 1 because first dom loaded then useEffect get executed so where it increase the value by 1</b>
                </div>
            </div>
        </>
    );
}

export default UseRefExample;
