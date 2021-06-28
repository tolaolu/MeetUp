import cssclass from "./Card.module.css";

function Card(props) {
  return <div className={cssclass.card}>{props.children}</div>;
}
export default Card;
// this js card is just to wrap each Meetup inside it.
