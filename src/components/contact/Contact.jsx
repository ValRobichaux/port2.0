import "./Contact.scss";
import { useState } from "react";
import emailjs from "emailjs-com";
import { useEffect } from "react";
import InputField from "../inputField/InputField";
import TextField from "../textField/TextField";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ReCAPTCHA from "react-google-recaptcha";


export default function Contact() {
  const [message, setMessage] = useState(false);
  const [status, setStatus] = useState("");
  const [emailargs, setEmailargs] = useState({
    fullName: "",
    email: "",
    role: "",
    message: "",
  });
  console.log(emailargs);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .send(
        "service_2j0g6kq",
        "template_qlbeyid",
        emailargs,
        "HTSHxPmiutMp2n0KB"
      )
      .then(
        (response) => {
          console.log("Message submitted successfully", response);
          setEmailargs({
            fullName: "",
            email: "",
            role: "",
            message: "",
          });
          setStatus("success");
        },
        (error) => {
          console.log("Message not sent", error);
        }
      );
  };

  const handleChange = (e) => {
    setEmailargs((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (status === "success") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  return (
    <div className="contact" id="contact">
      {status}
      <div className="responsive-container">
        <div className="row">
          <div className="left col">
            <img src="assets/emailMe.png" alt=""></img>
          </div>
          <div className="right col">
            <div className="formContainer">
              <form onSubmit={handleSubmit}>
                <h2 className="formTitle">Contact me!</h2>
                <InputField
                  value={emailargs.fullName}
                  handleChange={handleChange}
                  label="Full Name"
                  name="fullName"
                  type="text"
                  placeholder="John Doe"
                />
                <InputField
                  value={emailargs.email}
                  handleChange={handleChange}
                  label="Email"
                  name="email"
                  type="text"
                  placeholder="John Doe"
                />
                <TextField
                  value={emailargs.message}
                  handleChange={handleChange}
                  name="message"
                  label="Your message here"
                />
                <ReCAPTCHA
                sitekey={process.env.REACT_APP_SITE_KEY}/>
                <button type="submit" className="submitButton">
                  Send
                  <ArrowForwardIosIcon className="arrowIcon" />
                </button>
                {message && <span>Thanks, I'll get back to you ASAP! :)</span>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
