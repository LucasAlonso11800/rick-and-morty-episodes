import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Store } from './Store';
import { IEpisode, IAction } from './Interfaces';
import Episode from './Episode';

function App() {
    const { state, dispatch } = useContext(Store)

    useEffect(() => {
        (async function fetchData() {
            const url = 'http://api.tvmaze.com/shows/216/episodes'
            const data = await (await axios.get(url)).data

            return dispatch({
                type: 'FETCH_DATA',
                payload: data
            })
        })()
    }, []);

    return (
        <>
            <header className="header">
                <h1>Rick & Morty</h1>
                <p>Pick your favorite episodes</p>
            </header>
            <main className="episode-layout">
                {state.episodes.map((episode: IEpisode) => <Episode episode={episode} />)}
            </main>
        </>
    );
};

export default App;
