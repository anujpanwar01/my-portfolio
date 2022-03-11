import React from "react";
import socialDetail from "../../All-data/social-detail";
import FormInput from "../../components/Form-Input/FormInput";
import SocialContact from "../../components/Social-contact/SocialContact";
import CustomBtn from "../../components/Custom-Btn/CustomBtn";

import "./Contact-form.styles.scss";

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    };
  }
  submitHandler = async (event) => {
    const { name, email, phoneNumber, message } = this.state;
    event.preventDefault();
    const res = await fetch(
      `https://my-portfolio-bbc63-default-rtdb.firebaseio.com/user.json`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phoneNumber,
          message,
        }),
      }
    );

    this.setState({ name: "", email: "", phoneNumber: "", message: "" });
  };
  inputChangeHandler = (event) => {
    console.log(event);
    const { name, value } = event.target;
    console.log(value, name);
    this.setState(() => {
      return { ...this.state, [name]: value };
    });
  };

  //   textAreaHandler=(event)=>{
  // this.setState(())
  //   }
  render() {
    const { inputChangeHandler, submitHandler } = this;
    const { name, email, phoneNumber, message } = this.state;
    return (
      <section className="section-contact">
        <h3 className=" section-heading">Contact Me!</h3>

        <div className="contact">
          <div className="social-container">
            {socialDetail.map(({ id, ...otherProps }) => {
              return <SocialContact key={id} {...otherProps} />;
            })}
          </div>
          <form onSubmit={submitHandler} method="POST">
            <FormInput
              name="name"
              value={name}
              type="text"
              handleChange={inputChangeHandler}
              placeholder="Enter your name..."
            />
            <div>
              <FormInput
                name="email"
                value={email}
                type="email"
                handleChange={inputChangeHandler}
                placeholder="Enter your email"
              />

              <FormInput
                name="phoneNumber"
                value={phoneNumber}
                type="number"
                handleChange={inputChangeHandler}
                placeholder="Enter your ph.number"
              />
            </div>
            <textarea
              name="message"
              value={message}
              onChange={inputChangeHandler}
              placeholder="type your message..."
              style={{ resize: "none", height: "5rem" }}
            ></textarea>
            <CustomBtn>Submit</CustomBtn>
          </form>
        </div>
      </section>
    );
  }
}

export default ContactForm;
