import { useRef } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import useFetchData from "./hooks/useFetchData";

const Testing = () => {
    // const [error, getValueLocally, setValueLocally, value, deleteValue] = useLocalStorage();
    // const inputRef = useRef(null);
    // console.log("daattt->", { error, value });

    //fetching the data  :-
    const [data, error, loading] = useFetchData("https://dummyjson.com/products");
    console.log("fething data is->", { error, data, loading });
    return (
        // <div style={{ display: "flex ", justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
        //     <div>
        //         <h2>     Handle the local storage</h2>
        //         {error ? <h2>SOMETHING WENT WRONG!</h2> : value ? value : ""}
        //         <div style={{ padding: 0 }}>
        //             <input ref={inputRef} style={{ padding: 10, width: "100%" }} placeholder="Enter the value to save " />
        //             <div style={{ display: "flex", justifyContent: 'space-between', marginTop: 20 }}>
        //                 <button onClick={() => setValueLocally("gaurav", inputRef?.current?.value)} style={{ padding: 10, backgroundColor: "green", color: "white", border: "none", borderRadius: 10 }}>Save</button>
        //                 <button onClick={() => getValueLocally("gaurav")} style={{ padding: 10, backgroundColor: "orange ", color: "white", border: "none", borderRadius: 10 }}>Get data</button>
        //                 <button onClick={() => deleteValue("gaurav")} style={{ padding: 10, backgroundColor: "red", color: "white", border: "none", borderRadius: 10 }}>Delete</button>

        //             </div>
        //         </div>

        //     </div>
        // </div>
        <>
            {loading ? <h2>LOADING..................</h2> : error ? <h2>ERROR OCCURED</h2> : "FETCH DATA ALREADY!"}
        </>
    )
}

export default Testing; 