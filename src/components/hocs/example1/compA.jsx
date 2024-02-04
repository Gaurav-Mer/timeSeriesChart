export default function CompA({ name, prod }) {
    return (
        <>
            I am comp A  {name}
            <div>
                <h2>Listing of products :- </h2>
                {prod?.map((item) => {
                    return (
                        <div style={{ background: "orange", width: "90vw", margin: "10px 30px", padding: 10, }}>
                            <h3>{item?.title}</h3>
                            <h3>${item?.price}</h3>
                        </div>

                    )
                })}
            </div>
        </>
    )
}