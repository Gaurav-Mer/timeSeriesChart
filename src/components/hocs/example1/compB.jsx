const CompB = ({ prod }) => {
    return (
        <>
            I am comp B
            <div style={{
                display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(200px, 600px))"
            }}>
                {prod?.map((item) => {
                    return (
                        <>
                            <div style={{ height: 200, background: 'red', padding: 20, color: "white" }}>
                                <h2>{item?.title}</h2>
                                <h2>${item?.price}</h2>
                            </div>
                        </>
                    )
                })}


            </div >
        </>
    )
};

export default CompB;