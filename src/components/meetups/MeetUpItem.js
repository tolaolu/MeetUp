import cssclass from "./MeetUpItem.module.css";
import Card from "../ui/Card";

function MeetUpitem(props) {
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
          <button>Add To Favorites</button>
        </div>
      </Card>
    </li>
  );
}
export default MeetUpitem;
