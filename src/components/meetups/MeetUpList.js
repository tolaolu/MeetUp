import cssclass from "./MeetUpList.module.css";
import MeetUpItem from "./MeetUpItem";

function MeetUpList(props) {
  return (
    <ul className={cssclass.list}>
      {props.eachMeetUpItem.map((eachMeetUp) => (
        <MeetUpItem
          key={eachMeetUp.id}
          id={eachMeetUp.id}
          image={eachMeetUp.image}
          title={eachMeetUp.title}
          address={eachMeetUp.address}
          description={eachMeetUp.description}
        />
        // the above means we gave the map() an eachMeetup element, where we then
        //set the element to contain an array from the MeetUpItem.js - this means
        // the meetupitemjs will now be stored into eachMeetUp variable. then the
        //map function will map the eachmeetup var.
        // why cant we map MeetUpitem directly? find out.
      ))}
    </ul>
  );
}

export default MeetUpList;
