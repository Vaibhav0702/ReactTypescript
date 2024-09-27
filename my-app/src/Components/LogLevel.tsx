
import React from 'react'


interface LogType {
    status: "Info" | "Warn" | "Error"   // it will accept only one of this three value 
}


export default function LogLevel(log: LogType) {

    let status;

    if (log.status === "Info") {
        status = "Info"
    }
    else if (log.status === "Warn") {
        status = "Warn"
    }
    else if (log.status === "Error") {
        status = "Error"
    }


    return (
        <div>{status}</div>
    )
}
