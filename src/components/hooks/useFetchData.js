import { useEffect, useState } from "react"

const useFetchData = (url, method) => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);


    const fetchData = async () => {
        method = method ? method : {};
        const res = await fetch(url, method);
        console.log("res is ", res);
        if (res?.status !== 200) {
            setLoading(false)
            return setError(true)
        }
        const respData = await res.json();
        setLoading(false)
        return setData(respData?.products)
    }

    useEffect(() => {
        try {
            if (url) {
                setLoading(true);
                fetchData()
            }
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    }, [url])
    return [data, error, loading]
}

export default useFetchData;