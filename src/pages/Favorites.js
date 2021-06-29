// this page will allow us view our favorite meetups
import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetUpList from "../components/meetups/MeetUpList";

function FavouritesPage() {
  const favoriteContextObject = useContext(FavoritesContext);

  let content;

  if (favoriteContextObject.totalFavorites === 0) {
    content = <p>You have no favorites. Wanna add some?</p>;
  } else {
    <MeetUpList eachMeetUpItem={favoriteContextObject.favorites}></MeetUpList>;
  }
  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
}
export default FavouritesPage;
