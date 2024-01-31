import React, { useEffect, useState } from "react"
import useFetchData from "../hooks/useFetchData";

function EnchanceComp(InputComp) {
    const EnchanceComponent = (props) => {
        //fetching data here using custom hook to fetch data
        const [data, error, loading] = useFetchData("https://dummyjson.com/products")

        return loading ? "LOADING......................." : error ? "ERROR WHILE FETCHING !!!!!" : <InputComp {...props} name={"gaurav"} prod={data} />
    }
    return React.memo(EnchanceComponent);
}

export default (EnchanceComp);