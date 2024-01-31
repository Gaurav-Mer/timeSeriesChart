//@required need data form the user i.e data (req)
//need url from the user where to hit (req)
//return the promise better handle at where we are calling it 

import { useState } from "react";

//callback  after data uploaded successfully  (if any );
const useUploadData = () => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const uploadData = async (url, data, callBackFnc) => {
        setLoading(true);
        setError(false);
        //i have call this on apitest file:--------
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            if (!res || res.status !== 200) {
                setError(true);
                setLoading(false);
                return { success: false }
            } else {
                const jsonData = await res.json();
                if (jsonData) {
                    setLoading(false);
                    setError(false);
                    callBackFnc && callBackFnc(jsonData);
                    return { success: true }
                } else {
                    return { success: false }
                }
            }

        } catch (error) {
            setError(true);
            setLoading(false);
            console.log("error is =>>", error);
            return { success: false }
        }
    }

    return { error, loading, uploadData };
}

export default useUploadData;