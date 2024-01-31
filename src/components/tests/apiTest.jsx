import { useState } from "react";
import useUploadData from "../hooks/apiRequest/useUploadData";

const ApiTest = () => {
    //calling the useUploadData hook for uploading data 
    const { loading, error, uploadData } = useUploadData();
    const [dummyData, setDummyData] = useState([{ title: "ABC", id: 232 }, { title: "PENCIL", id: "SDf" }])
    const handleUpload = async () => {
        const data = await uploadData("https://dummyjson.com/products/add", { title: "GAURAV  MER" }, (data) => {
            setDummyData(prev => ([data, ...prev]))
        });
        if (data?.success) {
            console.log("Perform other task because data uploaded successfully!")
        }
    }
    return (
        <>
            <button disabled={loading} onClick={handleUpload}>upload data </button>
            {error ? <h3>ERROR WHILE UPLOADING...</h3> : ""}

            <div style={{ marginTop: 20 }}>
                {dummyData?.map((item) => {
                    return (
                        <>
                            <li style={{ padding: 10, background: "orange", margin: 10 }}>{item?.title}</li>
                        </>
                    )
                })}
            </div>
        </>
    )
}
export default ApiTest;