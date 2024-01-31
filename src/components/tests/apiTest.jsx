import { useState } from "react";
import useUploadData from "../hooks/apiRequest/useUploadData";
import useEditData from "../hooks/apiRequest/useEditData";

const ApiTest = () => {
    //calling the useUploadData hook for uploading data 
    const { loading, error, uploadData } = useUploadData();
    const { loading: editLoading, error: editError, editData } = useEditData();
    const [dummyData, setDummyData] = useState([{ title: "ABC", id: 232 }, { title: "PENCIL", id: "SDf" }]);

    const handleUpload = async () => {
        const data = await uploadData("https://dummyjson.com/products/add", { title: "GAURAV  MER" }, (data) => {
            setDummyData(prev => ([data, ...prev]))
        });
        if (data?.success) {
            console.log("Perform other task because data uploaded successfully!")
        }
    }

    const handleEdit = async (id) => {
        const resp = await editData("https://dummyjson.com/products/1", { name: "EDITED DATA" }, id, () => {
            setDummyData(prev => {
                let obj = [...prev];
                let currIndex = obj.findIndex(data => data?.id === id);
                obj[currIndex].title = "edited data is here"
                return obj;
            })
        });
        if (resp?.success) {
            console.log("Perform other task because data uploaded successfully!")
        }
    }

    return (
        <>
            <button disabled={loading} onClick={handleUpload}>upload data </button>
            {error || editError ? <h3>ERROR WHILE UPLOADING...</h3> : ""}

            <div style={{ marginTop: 20 }}>
                {dummyData?.map((item) => {
                    return (
                        <>
                            <li style={{ padding: 10, background: "orange", margin: 10 }}>{item?.title} <button onClick={() => handleEdit(item?.id)} style={{ marginLeft: 20, color: 'purple', fontWeight: 'bold' }} disabled={editLoading}>Edit </button
                            ></li>
                        </>
                    )
                })}
            </div>
        </>
    )
}
export default ApiTest;