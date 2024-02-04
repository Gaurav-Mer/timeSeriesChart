import React, { useEffect, useState } from 'react'
import Inner from './inner';

const Outer = () => {
    const [count, setCount] = useState(0);
    const [userData, setUSerData] = useState("")
    useEffect(() => {
        alert("Outer  Useeffect")
    }, []);

    useEffect(() => {
        alert("Load whenever count changes");
        setUSerData(Math.random())
    }, [count]);


    return (
        <>
            <div style={{ marginTop: 10, padding: 10, background: "purple" }}>
                Outer {userData}
                <button onClick={() => setCount(prev => prev + 1)}>COunt {count}</button>
            </div>
            <Inner userData={userData} />
        </>
    )
}

export default Outer;


/*---------------- FLOW OF ALERTS (useEffect goes from the inside to outside)-------------------------- :--

1-> inner most 
2-> inner most user data
3-> inner comp load first time 
4-> inner reload ==>  (this cause change in setChild and cause reload of self and child comp i.e => <InnnerMost/>  )
5-> outer useEfffect
6-> load wheneever count change  (this cause chagne in setUSerData which cause reload of self and child comp i.e <Inner/> and <InnerMost/>);

---------alert due to reload  ----
RELOAD ORDER GOES FROM OUTSIDE TO INSDIE 
here outer is <Outer/> so their self and its children rerender cause alert

7-> Inner most user data
8-> Inner reload =>

------- reload cause due to <Inner/>  and its child i,e <InnerMost/>
9-> Inner most user data

*/
