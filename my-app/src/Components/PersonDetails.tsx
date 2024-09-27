import React from 'react'



interface PersonDetailsType {
    details : {
        name : string,
        lastName : string,
        age : number
    }
}


export default function PersonDetails(props : PersonDetailsType) {
    return (
        <>
            <div>First Name - {props.details.name}</div>
            <div>Last Name - {props.details.lastName}</div>
            <div>Age - {props.details.age}</div>
        </>
    )
}
