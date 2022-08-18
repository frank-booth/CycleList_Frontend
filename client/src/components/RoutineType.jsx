import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const RoutineType = ({songs}) => {

    const [routineSelected, selectRoutine] = useState(songs)

    let climb = songs?.filter((song) => song.Routine?.category === 'Climb')
    let flatRoad = songs?.filter((song) => song.Routine?.category === 'Flat Road')
    let sprints = songs?.filter((song) => song.Routine?.category === 'Sprints')
    let jumps = songs?.filter((song) => song.Routine?.category === 'Jumps')
    let warmUp = songs?.filter((song) => song.Routine?.category === 'Warm-Up')
    let coolDown = songs?.filter((song) => song.Routine?.category === 'Cool-Down')
    let otherCategory = songs?.filter((song) => song.Routine?.category === 'Other')

    return(
        <div>
            <h1>Songs by Routine</h1>
            <div className="filter-nav">
                <button onClick={() => selectRoutine(songs)}>All</button>                
                <button onClick={() => selectRoutine(climb)}>Climb</button>
                <button onClick={() => selectRoutine(flatRoad)}>Flat Road</button>
                <button onClick={() => selectRoutine(sprints)}>Sprints</button>
                <button onClick={() => selectRoutine(jumps)}>Jumps</button>
                <button onClick={() => selectRoutine(warmUp)}>Warm-Up</button>
                <button onClick={() => selectRoutine(coolDown)}>Cool-Down</button>
                <button onClick={() => selectRoutine(otherCategory)}>Other</button>
            </div>
            <div className="songs-container">
                {routineSelected?.map((song) => (
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

export default RoutineType