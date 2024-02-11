"use client"
import { useState } from "react";
import "./Style.css"
import axios from "axios";

const Contact = () => {
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}api/sendEmail`, {email, message});
      if(res.status === 200){
        alert('Email sent successfully!');
        // console.log('Email sent!');
      }else {
        alert('Error sending email.');
        // console.log('error sending email.');
      }
      
    } catch (error) {
      console.log('Error while sending the contact Form', error);
    }
  }

  return (
    <div>
      <section className="flex flex-col justify-center z-50 bg-[#1D1F21] h-screen" id="contact">
        <h1 className="text-2xl lg:text-3xl text-center py-10 lg:pt-6 lg:pb-6">
          Contact us
        </h1>
        <div className="flex justify-around items-center">
          <span className="flex items-center justify-center w-1/2">
            <div className="form-container">
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input required name="email" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="textarea">How Can We Help You?</label>
                  <textarea
                    required
                    cols="50"
                    rows="10"
                    id="textarea"
                    name="textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  >
                  </textarea>
                </div>
                <button type="submit" className="form-submit-btn" >
                  Submit
                </button>
              </form>
            </div>
          </span>
          <span className="hidden lg:flex lg:items-center lg:justify-center lg:w-1/2">
            <img src="/assets/Contact-us.png" alt="Contact-us.png" className="lg:w-96" />
          </span>
        </div>
      </section>
    </div>
  );
};

export default Contact;
