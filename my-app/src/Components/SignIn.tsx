import React, { useState } from 'react'

export default function SignIn() {

    interface UserType{
        name : string,
        email : string
    }

    const [isSignIn, setSignIn] = useState(false);

    const [user , setUser] = useState<UserType | null>();  // set useState type as userTYpe or null


    const handleSignIn = () => {
        setSignIn(true);

        setUser({
            name : "vaibhav",
            email : "vaibhav@mail.com"
        })
    }


    const handleSignOut = () => {
        setSignIn(false);
        setUser(null);
    }





    return (
        <div>

            <button onClick={handleSignIn}>Sign in</button>
            <button onClick={handleSignOut} >Sign out</button>

            <div> {isSignIn ? "SignIn" : "SignOut"}</div>


            <div>
                {user?.name} 
            </div>
            <div>
                {user?.email}
            </div>

        </div>
    )
}
