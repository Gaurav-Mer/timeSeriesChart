# timeSeriesChart
# timeSeriesChart

HOW TO CREATE HOC FUNCTION :-

------------------------------ HOC FUNCTION IS => ------------------------------
const HigerOrderComp=(Incomingcomp)=>{
    const WrapppingComponnent=()=>{
        const [fetchData,setFetchData] = useState([]);
        
        fetchDataFromApi=()=>{
            if(pageType==="git"){
                FETCHAPIDATA();
            }else{
                FETCHPERSONALDATA();
            }
        }

        return (
            <>
            <h3>WRITE HERE WHAT IS THE COMMON BETWEEN THE COMPONENTS</h3>
            <IncomingComp  {...props} otherData={fetchData}  />
            </>
        )
    }

    return <WrappingComponet />
}
export default HigerOrderComp;


--------------------------------------- EXAMPLE --------------- --------------------
############################# FIRST COMP TO CALL HOC ################################
const GitDetails =()=>{
    const WrappingComp = HigerOrderComp(userGitDetails);

    return (
        <>
        Write here logic for the particular page i.e gitDETAILS
        <WrappingComp  pageType={"git"} /> 
        </>
    )
}

############################# SECOND COMP TO CALL HOC ################################
const PersonalDetails=()=>{
    const WrappingComp = HigherOrderComp(userPersonalDetails);
    return (
        <>
        <h2>Show data only want to show in profile page </h2>
        <WrappingComp pageType={"personal"} />
        </>
    )
} 


========================= DEFINE THE <PersonalDetails/> && <GitDetails/> COMPONENTs =================================

*/


---------------------- CREATE CUSTOM HOOKS FOR API UPLOADING DATA INSIDE COMPONENTS/HOOKS/APIREQUEST ------------
