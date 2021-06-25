import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { Store } from './Store';
import { IEpisode, IAction } from './Interfaces';
import Episode from './Episode';
// Pages
import HomePage from './HomePage';
import FavPage from './FavPage';

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
        <Router>
            <Route path="/" exact component={HomePage} />
            <Route path="/fav" exact component={FavPage} />
        </Router>
    );
};

export default App;
