import React, { createContext, useReducer } from 'react';
import { IState, IAction, IEpisode } from './Interfaces';

const initialState: IState = {
    episodes: [],
    favorites: []
};

export const Store = createContext<IState | any>(initialState);

function reducer(state: IState, action: IAction): IState {
    switch (action.type) {
        case 'FETCH_DATA': return { ...state, episodes: action.payload }
        case 'ADD_FAV': return { ...state, favorites: [...state.favorites, action.payload] }
        case 'REMOVE_FAV': return { ...state, favorites: state.favorites.filter(fav => fav.id !== action.payload.id)}
        default: return state
    }
};

export function StoreProvider(props: any): JSX.Element {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <Store.Provider value={{ state, dispatch }}>
            {props.children}
        </Store.Provider>
    )
};