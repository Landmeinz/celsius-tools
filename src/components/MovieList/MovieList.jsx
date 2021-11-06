import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);


    function handleClick() {
        console.log('CLICK on handleClick');
        history.push('/details')
    }



    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div 
                            key={movie.id} 
                            onClick={handleClick}
                        >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} style={{cursor:'pointer'}} />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;