import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Contact.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      setError('Please complete all fields');
      return;
    }

    setIsSending(true);

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

  return (
    <div className="mainDisplayContainer">
      <Form onSubmit={handleUserSubmit}>
        <Form.Group className="mb-3" id="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            placeholder="enter name here"
            className="nameInput"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" id="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            placeholder="enter email here"
            className="emailInput"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" id="formMessage">
          <Form.Label>Message</Form.Label>
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
        {isSent && <div className="thankYou">Your message has been sent, Thank You!</div>}
        <Button type="submit" disabled={isSending}>
          {isSending ? "Sending..." : "Send"}
        </Button>
      </Form>
    </div>
  );
}
