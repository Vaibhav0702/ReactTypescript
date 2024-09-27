import React, { createContext } from "react";
import { StyleObj } from "./Style";

export const StyleContextObject = createContext(StyleObj);


interface StyleContextType {
    Children: React.ReactNode
}

export const StyleContextProvider = ({ Children }: StyleContextType) => {
    return <StyleContextObject.Provider value={StyleObj}   > {Children}</StyleContextObject.Provider>
}