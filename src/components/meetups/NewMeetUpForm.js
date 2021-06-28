import Card from "../ui/Card";
import formCss from "./NewMeetUpForm.module.css";
import { useRef } from "react";

function NewMeetUpForm(props) {
  const titleInputPane = useRef();
  const imageInputPane = useRef();
  const addressInputPane = useRef();
  const descriptionInputPane = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const userTitleInput = titleInputPane.current.value;
    const userImageInput = imageInputPane.current.value;
    const userAddressInput = addressInputPane.current.value;
    const userDescriptionInput = descriptionInputPane.current.value;

    const allUserInput = {
      title: userTitleInput,
      image: userImageInput,
      address: userAddressInput,
      description: userDescriptionInput,
    };

    //console.log(allUserInput);

    props.onAddMeetUpBtnClick(allUserInput);
    //u can name this as u wish.
    // line above means u have automatically added onAddMeetUpBtnClick as an
    // attribute of NewMeetUpForm.jsx tag. so anywhere u use this NewMeetUpForm
    //as a tag, u can call onAddMeetUpBtnClick as an attribute there.
    //setting alluserInput into this statement means u are setting allUserInput
    // into it. not like constructor or method.
    //this is a statment and this is a way of assigning values into a statement.
  }

  return (
    <Card>
      <form className={formCss.form} onSubmit={submitHandler}>
        <div className={formCss.control}>
          <label htmlFor="title">MeetUp Title</label>
          <input type="text" required id="title" ref={titleInputPane} />
        </div>
        <div className={formCss.control}>
          <label htmlFor="image">MeetUp Image</label>
          <input type="url" required id="image" ref={imageInputPane} />
        </div>
        <div className={formCss.control}>
          <label htmlFor="image">MeetUp Address</label>
          <input type="text" required id="address" ref={addressInputPane} />
        </div>
        <div className={formCss.control}>
          <label htmlFor="description">MeetUp Description</label>
          <textarea
            required
            row="5"
            id="description"
            ref={descriptionInputPane}
          ></textarea>
        </div>
        <div className={formCss.actions}>
          <button>Add Meet Up</button>
        </div>
      </form>
    </Card>
  );
}
export default NewMeetUpForm;
