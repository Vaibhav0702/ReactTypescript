import React from 'react'


interface TeamsType {
    IPL : {
        team : string,
        color :string
    }[]   // it is consider as array of object
}


export default function Teams(IPLTeam : TeamsType) {
  return (
    <>
    {
        IPLTeam.IPL.map((teams , i) => (
            <div>
               {i+1} . {teams.team} {teams.color}
            </div>
        ))
    }
    </>
  )
}
