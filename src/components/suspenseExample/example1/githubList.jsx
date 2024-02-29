import React from 'react'
import Listing from './listing'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'

const GithubList = () => {
    return (
        <div>
            <h1>ALl the github user are :--</h1>
            <ErrorBoundary errorComponent={"error"} fallback={<h1>sdf</h1>}>
                <Listing />
            </ErrorBoundary>
        </div>
    )
}

export default GithubList
