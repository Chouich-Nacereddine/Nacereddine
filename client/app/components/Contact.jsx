"use client";
import { useState } from "react";
import axios from "axios";
import "aos/dist/aos.css";
import AOS from "aos";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}api/sendEmail`,
        { email, message }
      );
      if (res.status === 200) {
        alert("Email sent successfully!");
        // console.log('Email sent!');
      } else {
        alert("Error sending email.");
        // console.log('error sending email.');
      }
    } catch (error) {
      console.log("Error while sending the contact Form", error);
    }
  };

  return (
    <section className="h-max px-[8%] py-10 overflow-hidden flex flex-col items-center " id="Contact">
      <h1
        className="lg:flex hidden justify-center items-center py-[5%] mt-20 w-full h-[10vh] text-4xl "
        data-aos="zoom-in-down"
      >
        <span className="text-[#ff7961]">C</span>ontact
      </h1>
      <h1 className="lg:hidden flex items-center justify-center mt-6 text-2xl font-semibold py-10">
        <span className="text-[#ff7961]">C</span>ontact
      </h1>
      <div className="form-container">
        <form className="form">
          <div className="form-group">
            <label for="email">Company Email</label>
            <input required="" name="email" id="email" type="text" />
          </div>
          <div className="form-group">
            <label for="textarea">How Can We Help You?</label>
            <textarea
              required=""
              cols="50"
              rows="10"
              id="textarea"
              name="textarea"
            >
            </textarea>
          </div>
          <button type="submit" className="form-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
