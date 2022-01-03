import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function AddFavoriteHandler(favoriteMeetup) {
    setUserFavorites((previousUserFavorites) => {
      return previousUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((previousUserFavorites) => {
      return previousUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemISFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: AddFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemISFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}


export default FavoritesContext;