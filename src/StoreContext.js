import React from "react";

const StoreContext = React.createContext(null)
export default StoreContext

export const Provider = (props) => {
    return <StoreContext.Provider value={props.value}>
        {props.children}
    </StoreContext.Provider>

}