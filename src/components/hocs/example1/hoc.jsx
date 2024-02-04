import { useState } from "react";
import CompA from "./compA";
import EnchanceComp from "./enhanceComp";
import CompB from "./compB";
import UserDetails from "./userDetails";

export default function Hoc() {
    const [type, setType] = useState(true);
    const compType = type ? CompA : CompB;
    const MyEnhanceComponent = EnchanceComp(compType);
    const userData = { name: "gaurav mer ", email: "gaurav22@gmail.com" }
    return (
        <>
            i am hoc
            <button onClick={() => setType(prev => !prev)}>Toggle type</button>
            {type ? "COMP 1" : "COMP 2"}
            <div>
                <MyEnhanceComponent userData={userData} />
                {/* <UserDetails userData={userData} /> */}
            </div>
        </>
    )
}