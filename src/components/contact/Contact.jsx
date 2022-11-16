import { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.scss";
import { useEffect } from "react";
import InputField from "../inputField/InputField";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const [status,setStatus] = useState('');
  const [emailargs, setEmailargs] = useState({
    fullName: "",
    email: "",
    role: "",
    message: "",
  });

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
      .then((response) => {
        console.log("Message submitted successfully", response);
        setEmailargs({
          fullName: "",
          email: "",
          role: "",
          message: "",
        });
        setStatus('success');
      }, error => {
        console.log('Message not sent',error);
      });
  };

  useEffect(() => {
    if(status === 'success') {
      setTimeout(() => {
        setStatus('');
      },3000);
    }
  }, [status]);

  return (
    <div className="contact" id="contact">
      {status}
      <div className="left">
        <img src="assets/emailMe.png" alt=""></img>
      </div>
      <div className="right">
        <h2>Contact me!</h2>
        <form onSubmit={handleSubmit}>
          <InputField/>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll get back to you ASAP! :)</span>}
        </form>
      </div>
    </div>
  );
}
