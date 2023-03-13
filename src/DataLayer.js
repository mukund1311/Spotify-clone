import React, {createContext, useContext, useReducer} from 'react';


export const DataLayerContext = createContext();

export const DataLayer = ({initialState, reducer, children}) =>(
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);
// export const DataLayer = ({ initialState, reducer, children }) => (
//   if (typeof reducer !== 'function') {
//     throw new Error('reducer is not a function');
//   }
//   );
  export const UseDataLayerValue = () => useContext(DataLayerContext);