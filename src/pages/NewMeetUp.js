// this page will allow us view our new Meetups
import NewMeetUpForm from "../components/meetups/NewMeetUpForm";
import { useHistory } from "react-router-dom";

function NewMeetUpPage() {
  const history = useHistory();

  function UserInputToAPISender(allUserInput) {
    //this func will send our userinputs to Firesbase DB using JS Fetch().
    // fetch is a JS method for sending n receiving Http requests
    // by default sends Get data and we need Post to send data.
    // https://meetup-myfirst-react-db-default-rtdb.firebaseio.com/ is
    //our firebase api url. adding /meetups.json creates a folder meetups.
    // u must ensure u end what u add with .json as above
    fetch(
      "https://meetup-myfirst-react-db-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST", // this is what changes it from GET to POST
        // post is used to post to db and get is used to fetch from db.
        body: JSON.stringify(allUserInput), // this means we wld be using JSON format to
        //send d data and stringify can carry array, objects, vars, list
        //etc and it will convert them into JSON format. other minor settings are:
        headers: {
          "content-type": "application/json", //this ensures the request carry
          // a metadata saying this request is carrying a JSON format.
          // fetch() also returns a promise which returns as soon as fetch
          // as posted or gotten d request we passed to it. hence why we can use
          // its then() ie fetch().then for navigating with useHistory(); hence:
        },
      }
    ).then(() => {
      history.replace("/"); // navigated to homepage after sub to DB.
    });
    // u can use history.push() buh this will allow user to use back button
    // which is not needed here after submitting to the DB.
  }
  return (
    <section>
      <h1>New Meet Up</h1>
      <NewMeetUpForm onAddMeetUpBtnClick={UserInputToAPISender} />
      {/*   */}
    </section>
  );
}
export default NewMeetUpPage;
