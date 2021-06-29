//this is the page responsible for loading n displaying all meetups
import MeetUpList from "../components/meetups/MeetUpList";
import { useState, useEffect } from "react";

function AllMeetUpsPage() {
  const [currentlyLoading, FuncForCurrentlyLoading] = useState(true);
  //true above means we r starting in a loading state
  const [loadedMeetUps, setLoadedMeetUps] = useState([]);
  //above is  using useState to collect an array of our data from DB.

  // we could make this func async and to await fetch() inside it but
  // once u use async, it converts the function to one that returns a promise.
  //and that means such a function is no longer a React JSX/component again.
  // cos every React Funcs must be synchronous and never return a promise.
  // so instead of using async and await, we will use State to display
  // something temporarily -like a spinner, while fetch() is working in the
  // background to return its promise(ie till when fetch returns its response
  // until it returns myAnonFuncForResponse below).

  useEffect(() => {
    FuncForCurrentlyLoading(true);
    //above means this will always b true when this comp loads.

    fetch(
      "https://meetup-myfirst-react-db-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((myAnonFuncForResponse) => {
        return myAnonFuncForResponse.json();
      })
      .then((FetchedData) => {
        const eachMeetUpFromDB = []; // empty array to take meetups from DB.

        for (const key in FetchedData) {
          const eachMeetUpObjectInDB = {
            id: key,
            ...FetchedData[key], //... is d Spread Operator. a default
            //js operator that will copy all the key value pairs
            // of the nested objects into this FetchedData object of ours.
          };
          eachMeetUpFromDB.push(eachMeetUpObjectInDB);
        }

        FuncForCurrentlyLoading(false);
        setLoadedMeetUps(eachMeetUpFromDB);
      });
  });

  if (currentlyLoading) {
    <section>
      <p>The page is currently loading...</p>
    </section>;
  }
  return (
    <section>
      <h1>All Meet Ups</h1>
      <MeetUpList eachMeetUpItem={loadedMeetUps} />
    </section>
  );
}
export default AllMeetUpsPage;

// fetch here doesnt need the second pars cos here we r using GET. which
// is its default.
// problem here is cos Fetch returns a promise, JS wont wait for this then()
//before it jumps to return the section below. Hence why we may convert
//AllMeetUpsPage to an async function to await fetch to return its promise
// before jumping to return the <section> below. Thats d work of
//async n await. Async AllMeetUpsPage, await Fetch().
// but we wont use async n await here to we can maintain our func to still
// be a React component.

// key="{meetup.id} this is required by React when using <li>- to give
// ids to li tags
