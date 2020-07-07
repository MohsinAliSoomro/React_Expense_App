import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
//initial state
const initialState = {
    transactions: [
        { id: 1, text: 'flower', amount: -20 },
        { id: 2, text: 'shoe', amount: -400 },
        { id: 3, text: 'banana', amount: 120 },
        { id: 4, text: 'cash', amount: 1220 },
    ]
}
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction, addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    );
}