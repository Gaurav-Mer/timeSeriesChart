import { useEffect, useState } from "react"

const useFetchData = (url, method, onlyResp = false) => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            method = method ? method : {};
            const res = await fetch(url, method);
            if (res?.status !== 200) {
                setLoading(false)
                return setError(true)
            }
            const respData = await res.json();
            if (onlyResp) {
                setLoading(false)
                return setData(respData);
            }
            setLoading(false)
            return setData(respData?.products)
        } catch (error) {
            setError(true);
            setLoading(false);
        }
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
    }, [url]);

    return [data, error, loading];
}

export default useFetchData;