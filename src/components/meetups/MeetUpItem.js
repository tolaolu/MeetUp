import cssclass from "./MeetUpItem.module.css";
import Card from "../ui/Card";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
// useContext helps us to connect this comp to our Context
function MeetUpItem(props) {
  // below we r finding out if this MeetUpItem is a favorite or not:
  const favoriteContextObject = useContext(FavoritesContext);
  // passing the id of the comp we wanna check if its favorite or not.
  const itemIsFavorite = favoriteContextObject.itemIsFavorite(props.id);
  //itemIsFavorite above will have true or false inside it.

  function ToggleFavoritesStatusHandler() {
    if (itemIsFavorite) {
      //then remove the item with this id from the Context.
      favoriteContextObject.removeFavorites(props.id);
    } else {
      favoriteContextObject.addFavorites({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={cssclass.item}>
      <Card>
        <div className={cssclass.image}>
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className={cssclass.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={cssclass.actions}>
          <button onClick={ToggleFavoritesStatusHandler}>
            {itemIsFavorite ? "Remove From Favorites" : "Add To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}
export default MeetUpItem;
