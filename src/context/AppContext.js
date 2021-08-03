import React from 'react'
import platformData from './data';
const AppContext = React.createContext();


export function AppWrapper({ children }) {

    const [data, setData] = React.useState(platformData)

    let state = { data, setData }
    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    );
}
export function useAppContext() {
    return React.useContext(AppContext);
}