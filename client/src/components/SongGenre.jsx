import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const SongGenre = ({songs}) => {

    const [genreSelected, selectGenre] = useState(songs)

    let popSongs = songs?.filter((song) => song.genre === 'Pop')
    let rockSongs = songs?.filter((song) => song.genre === 'Rock')
    let hipHopSongs = songs?.filter((song) => song.genre === 'Hip-hop')
    let countrySongs = songs?.filter((song) => song.genre === 'Country')
    let edmSongs = songs?.filter((song) => song.genre === 'EDM')
    let otherSongs = songs?.filter((song) => song.genre === 'Other')

    return(
        <div>
            <h1>Songs by Genre</h1>
            <div className="genre-nav">
                <button onClick={() => selectGenre(songs)}>All</button>
                <button onClick={() => selectGenre(popSongs)}>Pop</button>
                <button onClick={() => selectGenre(rockSongs)}>Rock</button>
                <button onClick={() => selectGenre(hipHopSongs)}>Hip-hop</button>
                <button onClick={() => selectGenre(countrySongs)}>Country</button>
                <button onClick={() => selectGenre(edmSongs)}>EDM</button>
                <button onClick={() => selectGenre(otherSongs)}>Other</button>
            </div>

            <div className="songs-container">
                {genreSelected?.map((song) => (
                <div key={song.id} className="song-card">
                    <h3>'{song.title}'</h3>
                    <img src={song.songImage} />
                    <p>{song.artist}</p>
                    <p>{song.genre}</p>
                    <p>{song.length}</p>
                    <p>{song.Routine?.category}</p>
                    <p>{song.Routine?.content}</p>
                </div>
                ))}
            </div>
        </div>
    )
}

export default SongGenre