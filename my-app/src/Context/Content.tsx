import React, { useContext } from 'react'
import { StyleContextObject } from './StyleContext'

export default function Content() {

    const theme = useContext(StyleContextObject)

  return (
    <div  style={{color : theme.style1.theme}}  >Content</div>
  )
}
