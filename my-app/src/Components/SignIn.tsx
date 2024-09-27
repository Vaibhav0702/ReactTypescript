import React, { useState } from 'react'

export default function SignIn() {


    const [isSignIn, setSignIn] = useState(false);


    const handleSignIn = () => {
        setSignIn(true)
    }


    const handleSignOut = () => {
        setSignIn(false)
    }





    return (
        <div>

            <button onClick={handleSignIn}>Sign in</button>
            <button onClick={handleSignOut} >Sign out</button>

            <div> {isSignIn ? "SignIn" : "SignOut"}</div>

        </div>
    )
}
