import React from 'react'
import Navbar from '../../navbar/navbar'

const ComponentWithNavbar = (WrappedComp) => {
    const HocWrappingComponent = (props) => {
        return (
            <>
                {/* <Navbar /> */}
                <Navbar />
                <WrappedComp {...props} />
            </>
        )
    }
    return HocWrappingComponent;
}

export default ComponentWithNavbar;
