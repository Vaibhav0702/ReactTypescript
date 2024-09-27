import React from 'react'


interface ParentType {
    children : React.ReactNode
}

export default function Parent(props : ParentType) {
  return (
    <div>{
        props.children
    }</div>
  )
}
