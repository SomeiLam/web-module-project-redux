import { combineReducers } from 'redux';
import favoritesReducer from './favoritesReducer';
import movieReducer from './movieReducer';

export default combineReducers({
    favoritesReducer: favoritesReducer,
    movieReducer: movieReducer
});