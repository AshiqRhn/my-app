import React from 'react'

function  Header( {data} ) {
    return (
        <>
            <h1>{data.title}</h1>
            {data?.subtitle && <h2>{data?.subtitle}</h2>}
            {data?.address && <h2>{data?.address}</h2>}
            {data?.name && <h2>{data?.name}</h2>}       
            
        </>
    )
}

export default  Header
