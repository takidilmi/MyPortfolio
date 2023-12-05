import React from "react";
import { useState } from "react";
import { TbArrowBigUpLines } from "react-icons/tb";
import $ from "jquery";

const Contact = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [name, setName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("https://formspree.io/f/xwkddynd", {
      method: "POST",
      body: JSON.stringify({ name, familyName, email, message }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (data.ok) {
      alert("Thank you for your message!");
      setName("");
      setFamilyName("");
      setEmail("");
      setMessage("");
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  const cancel = (event) => {
    event.preventDefault();
    setFormOpen(false);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10">
        <h2>Contact Me</h2>
        <div className="flex items-center justify-center mt-5 pb-10" id="app">
          <div className={`addProduct ${formOpen ? "open" : ""}`}>
            {!formOpen && (
              <div className="buttonCopy" onClick={() => setFormOpen(true)}>
                Contact Me
              </div>
            )}
            {formOpen && (
              <form onSubmit={handleSubmit}>
                <div className="flex justify-between flex-wrap">
                  <div className="formField short">
                    <label>Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      required
                      className="formElement"
                    />
                  </div>
                  <div className="formField short">
                    <label>Family Name</label>
                    <input
                      type="familyName"
                      value={familyName}
                      onChange={(e) => setFamilyName(e.target.value)}
                      placeholder="Your FamilyName"
                      required
                      className="formElement"
                    />
                  </div>
                </div>
                <div className="formField">
                  <label>Your Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    required
                    className="formElement"
                  />
                </div>
                <div className="formField">
                  <label>Your Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message"
                    required
                    className="formElement textarea"></textarea>
                </div>
                <button type="submit" className="submitButton">
                  Send
                </button>
                <div className="cancel text-white">
                  <span onClick={cancel}>Close</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      <div>
        <TbArrowBigUpLines
          size={60}
          className="cursor-pointer text-white opacity-60"
          onClick={() => $("html, body").animate({ scrollTop: 0 }, "slow")}
        />
      </div>
    </>
  );
};

export default Contact;
