import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Contact.css";

// logic for form
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please input valid email:)')
    }


    // checks to ensure all fields are completed
    if (!name || !email || !message) {
      setError('Please complete all fields');
      return;
    }

    setIsSending(true);
    
    // using formspree to send messages through to email
    try {
      const response = await fetch("https://formspree.io/f/mbjeylwz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!response.ok) {
        throw new Error("Could not send message");
      }
      setIsSent(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setError(err.message);
    }
    setIsSending(false);
  };

  
  // form created leveraging bootstrap
  return (
    <div className="mainDisplayContainer">
      <h2 className="contactHeading">Any questions? <div className="message">Send me a message!</div></h2>
      <Form onSubmit={handleUserSubmit} className="contactForm">
        <Form.Group className="mb-3" id="formName">
          <Form.Label className="input">Name:</Form.Label>
          <Form.Control
            placeholder="enter name here"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" id="formEmail">
          <Form.Label className="input">Email:</Form.Label>
          <Form.Control
            placeholder="enter email here"
            className="emailInput"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" id="formMessage">
          <Form.Label className="input">Add message here:</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="enter message here"
            className="messageInput"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
        {error && <div className="danger">{error}</div>}
        {isSent && <div className="thankYou">Your message has been sent, I'll respond as soon as I can. Thank You!</div>}
        <Button type="submit" disabled={isSending}>
          {isSending ? "Sending..." : "Send"}
        </Button>
      </Form>
    </div>
  );
}
