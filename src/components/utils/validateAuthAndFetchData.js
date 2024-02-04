import { useState } from "react";
import useFetchData from "../hooks/useFetchData";

const validateAuthAndFetchData = () => {
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);
    // const [tokenData, setTokenData] = useState({});

    // return { loading, error, tokenData }

    const [data, error, loading] = useFetchData("https://todo-list-backend-3ytm.onrender.com/api/setAuth", false, true);

    return {error, loading, data};
};

export default validateAuthAndFetchData;