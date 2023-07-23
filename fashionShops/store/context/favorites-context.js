import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
    const [favoritesFashionIds, setFavoritesFashionIds] = useState([]);

    function addFavorite(id) {
        setFavoritesFashionIds((currentFavId) => [...currentFavId, id]);
    }

    function removeFavorite(id) {
        setFavoritesFashionIds((currentFavId) =>
            currentFavId.filter((mealId) => mealId !== id)
        );
    }

    const value = {
        ids: favoritesFashionIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    };

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContextProvider;
