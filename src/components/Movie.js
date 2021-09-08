import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteMovie } from '../actions/movieActions';
import { addFavorite } from '../actions/favoritesAction';
import { removeFavorite } from '../actions/favoritesAction';

const Movie = (props) => {
    const { id } = useParams();
    const history = useHistory();

    const movies = props.movies;
    const movie = movies.find(movie=>movie.id===Number(id));

    const handleDeleteClick = () => {
        props.dispatch(deleteMovie(movie.id));
        props.favorites.forEach(element => {
            if (element.id === movie.id) {
                props.dispatch(removeFavorite(element.id));
            }
        })
        history.push('../movies');
    }

    const handleFavoriteClick = () => {
        props.dispatch(addFavorite(movie));
    }
    
    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            {props.displayFavorites && <span className="m-2 btn btn-dark"
                                  onClick={handleFavoriteClick}>Favorite</span>}
                            <span className="delete">
                                <input type="button" className="m-2 btn btn-danger" value="Delete" 
                                       onClick={handleDeleteClick}/>
                            </span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

const mapStateToProps = (state) => {
    return ({
        movies: state.movieReducer.movies,
        favorites: state.favoritesReducer.favorites,
        displayFavorites: state.favoritesReducer.displayFavorites
    })
}

export default connect(mapStateToProps)(Movie);