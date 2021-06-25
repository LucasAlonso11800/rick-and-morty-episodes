import React, { useContext } from 'react';
import { Store } from './Store';
import { IEpisode } from './Interfaces';
import Episode from './Episode';
import Header from './Header';

function FavPage() {
    const { state, dispatch } = useContext(Store)

    return (
        <>
            <Header text="Your favorite episodes" link="/" linkText="Back to Home Page"/>
            <main className="episode-layout">
                {state.favorites.map((episode: IEpisode) => <Episode episode={episode} />)}
            </main>
        </>
    )
};

export default FavPage;