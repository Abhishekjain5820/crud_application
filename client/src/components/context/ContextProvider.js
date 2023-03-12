import React, { createContext, useState } from 'react'

//this is used to shoe message after every operation like add update and delete is performed
export const addData = createContext();
export const updateData = createContext();
export const dltdata = createContext();

const ContextProvider = ({ children }) => {

    const [useradd, setUseradd] = useState("");
    const [update, setUpdate] = useState("");
    const [deletedata, setDLtdata] = useState("");

    return (
        <>
            <addData.Provider value={{ useradd, setUseradd }}>
                <updateData.Provider value={{ update, setUpdate }}>
                    <dltdata.Provider value={{deletedata, setDLtdata}}>
                        {children}
                    </dltdata.Provider>
                </updateData.Provider>
            </addData.Provider>
        </>
    )
}

export default ContextProvider