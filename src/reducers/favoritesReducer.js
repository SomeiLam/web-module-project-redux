import { ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_DISPLAY } from "../actions/favoritesAction"

export const initialState = {
    favorites: [],
    displayFavorites: true
}

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case (ADD_FAVORITE): {
            let inlist = false;
            if (state.favorites.length > 0) {
                state.favorites.forEach((element) => {
                    if (element.id === action.payload.id) 
                        return inlist = true;
                })
            }
            if (inlist)
                return state;
            else
                return {
                    ...state,
                    favorites: [...state.favorites, action.payload]
                };
        }
        case (REMOVE_FAVORITE): {
            return {
                ...state,
                favorites: state.favorites.filter(item => (action.payload !== item.id))
            }
        }
        case (TOGGLE_DISPLAY): {
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        }
        default:
            return state;
    }
}

export default favoritesReducer;