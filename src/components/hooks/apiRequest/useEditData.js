import { useState } from "react";

const useEditData = () => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const editData = async (url, data, id, callBackFnc) => {
        try {
            const resp = await fetch(url, {
                method: "PUT",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            if (!resp || resp.status !== 200) {
                setLoading(false);
                setError(false);
                return { success: false, msg: "Can not update this data" }
            }
            const jsonData = await resp.json();
            if (!jsonData) {
                setLoading(false);
                setError(true);
                return { success: false, msg: "Can not converted to json" }
            }
            setLoading(false);
            setError(false);
            callBackFnc && callBackFnc(id)
            return { success: true, msg: "updated successfully" }
        } catch (error) {
            setError(true);
            setLoading(false);
            console.log("handle error ", error)
            return { success: false, msg: error }
        }
    }
    return { error, loading, editData }
}
export default useEditData;