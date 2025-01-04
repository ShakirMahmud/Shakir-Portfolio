import { createContext, useRef } from "react";

export const RefContext = createContext();
const RefProvider = ({ children }) => {
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const skillsRef = useRef(null);

    const refInfo = {
        aboutRef,
        contactRef,
        skillsRef
    }
    return (
        <RefContext.Provider value={ refInfo }>
            {children}
        </RefContext.Provider>
    )
}

export default RefProvider