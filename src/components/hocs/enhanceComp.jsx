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


/*
syntax of HOC:

-------------------------- parent componet --------------------------------;
const ParentComp=()=>{
 const MyHocComp = EnhanceComp(CompA)
    return <MyHocComp greet ={"hello"}/>
}

----------------------------Enchance component component -----------------------------
  const EnhanceComp=(InputComp)=>{
     const WrapperComponent=(props)=>{
        const [data,setData] = useState([]);
        return (<InputComp data={data} {...props} />)
     }

    return WrapperComponent;
  }
  export default EnhanceComp;


  ------------------------------------ COMPA ------------------------------
  const CompA =({data,greet})=>{
    return (
        <> {greet} </>
        <h2>Product list is </h2>
        {data?.map((item)=>item?.name)}
    )
  }

*/