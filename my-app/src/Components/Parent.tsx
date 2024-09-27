import React from 'react'


interface ParentType {
    children : React.ReactNode  // accept component as prop
}

export default function Parent(props : ParentType) {
  return (
    <div>{
        props.children
    }</div>
  )
}
