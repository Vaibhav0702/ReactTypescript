import React from 'react'

// type PropsType = {
//     name : string,
//     age : number,
//     isEligible : boolean
// }

interface PropsType {
    name: string,
    age ?: number,   // ? is set age as optional
    isEligible: boolean
}


export default function Home(props: PropsType) {
    return (

        <>
            <div>Hello {props.name} , Welcom to the Page </div>
            {props.isEligible ? <p>Your age is {props.age} and you are eligible to vote.</p> : <p>you Cannot vote.</p>}
        </>
    )
}
