import { createContext, useState } from "react";

//createContext(); this method creates a context. which is a js obj.
// and cos it will contain a component is why the var below is capitalised.
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorites: (favoritesMeetUp) => {},
  removeFavorites: (meetUpId) => {}, // set as empty objs buh will be useful
  //later for auto completion in the IDE later.
  itemIsFavorite: (meetUpId) => {},
});
export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function AddFavoritesHandler(favoriteMeetUp) {
    // this function will guarantee that we hv the latest state.
    setUserFavorites((previousUserFavorites) => {
      return previousUserFavorites.concat(favoriteMeetUp);
    });
  }

  function RemoveFavoritesHandler(meetupId) {
    setUserFavorites((previousUserFavorites) => {
      return previousUserFavorites.filter((meetup) => meetup.id !== meetupId);
      //means return true if meetupid is !== to the meetup.Id we get as parameter.
      // this will return false and means we drop the item where d id is equal
      //cos the returned array will not contain the item that has the meetupId.
    });
  }

  function ItemIsFavoritedHandler(meetupId) {
    // this is the function that will be telling us if an item has been favorited or not.
    return userFavorites.some((meetup) => meetup.Id === meetupId);
    //means return true if meetupid is === to the meetupid we get as parameter.
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorites: AddFavoritesHandler, // this is done to expose these funcs
    // so that once u call the main context, they can also be reached and any
    // components listening to them can be updated with them.
    removeFavorites: RemoveFavoritesHandler,
    itemIsFavorite: ItemIsFavoritedHandler,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
export default FavoritesContext;
