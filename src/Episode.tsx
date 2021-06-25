import React, { useContext } from 'react';
import { Store } from './Store';
import { IEpisode } from './Interfaces';

interface Props {
    episode: IEpisode;
}

const Episode: React.FC<Props> = ({ episode }) => {
    const { state, dispatch } = useContext(Store);

    function toggleFav(episode: IEpisode) {
        const episodeIsInFav = state.favorites.includes(episode);
        const type = episodeIsInFav ? 'REMOVE_FAV' : 'ADD_FAV';
        return dispatch({
            type: type,
            payload: episode
        })
    };

    const border = state.favorites.find((fav: IEpisode) => fav.id === episode.id) ? '2px solid #f00' : '2px solid #000';

    return (
        <div className="episode-box" key={episode.id}>
            <img
                src={episode.image?.medium}
                alt={episode.name}
                className="episode-img"
                onClick={() => toggleFav(episode)}
                style={{ border: border }} />
            <div className="image-text">
                <p>{state.favorites.find((fav: IEpisode) => fav.id === episode.id) ? 'Unfav' : 'Fav'}</p>
            </div>
            <h4 className="episode-name">{episode.name}</h4>
            <div className="episode-data">
                <p>Season: {episode.season}</p>
                <p>Number: {episode.number}</p>
            </div>
        </div>
    )
}

export default Episode
