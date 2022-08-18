import { useState } from 'react'

const SongGenre = ({ songs }) => {
  const [genreSelected, selectGenre] = useState(songs)

  let popSongs = songs?.filter((song) => song.genre === 'Pop')
  let rockSongs = songs?.filter((song) => song.genre === 'Rock')
  let hipHopSongs = songs?.filter((song) => song.genre === 'Hip-hop')
  let countrySongs = songs?.filter((song) => song.genre === 'Country')
  let edmSongs = songs?.filter((song) => song.genre === 'EDM')
  let otherSongs = songs?.filter((song) => song.genre === 'Other')

  return (
    <div>
      <section className="genre-hero-section">
        <h1>Songs by Genre</h1>
      </section>
      <div className="filter-nav">
        <button onClick={() => selectGenre(songs)}>All</button>
        <button onClick={() => selectGenre(popSongs)}>Pop</button>
        <button onClick={() => selectGenre(rockSongs)}>Rock</button>
        <button onClick={() => selectGenre(hipHopSongs)}>Hip-hop</button>
        <button onClick={() => selectGenre(countrySongs)}>Country</button>
        <button onClick={() => selectGenre(edmSongs)}>EDM</button>
        <button onClick={() => selectGenre(otherSongs)}>Other</button>
      </div>
      <div className="list-container">
        <div className="column-headers">
          <h4>Song Image</h4>
          <h4>Title/Artist</h4>
          <h4>Genre</h4>
          <h4>Length</h4>
          <h4>Category</h4>
          <h4>Routine</h4>
        </div>
        <div className="songs-container">
          {genreSelected?.map((song) => (
            <div key={song.id} className="song-card">
              <img className="song-image" src={song.songImage} />
              <div className="artist-info">
                <h3>'{song.title}'</h3>
                <p>{song.artist}</p>
              </div>
              <p>{song.genre}</p>
              <p>{song.length}</p>
              <p>{song.Routine?.category}</p>
              <p>{song.Routine?.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SongGenre
