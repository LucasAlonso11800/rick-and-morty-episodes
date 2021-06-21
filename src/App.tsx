import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Store } from './Store';
import { IEpisode, IAction } from './Interfaces';

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

    function toggleFav(episode: IEpisode) {
        const episodeIsInFav = state.favorites.includes(episode);
        const type = episodeIsInFav ? 'REMOVE_FAV' : 'ADD_FAV';
        return dispatch({
            type: type,
            payload: episode
        })
    };

    return (
        <>
            <header className="header">
                <h1>Rick & Morty</h1>
            </header>
            <section className="episode-layout">
                {state.episodes.map((episode: IEpisode) => {
                    return (
                        <article className="episode-box" key={episode.id}>
                            <img src={episode.image?.medium} alt={episode.name} />
                            <h4>{episode.name}</h4>
                            <div>
                                <p>Season: {episode.season}</p>
                                <p>Number: {episode.number}</p>
                                <button type="button"
                                    onClick={() => toggleFav(episode)}
                                >
                                    {state.favorites.find((fav: IEpisode) => fav.id === episode.id) ? 'Unfav' : 'Fav'}
                                </button>
                            </div>
                        </article>
                    )
                })}
            </section>
        </>
    );
};

export default App;
