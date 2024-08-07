import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const _0x1a2b = [
    0x73, 0x74, 0x61, 0x65, 0x65, 0x6d, 0x72, 0x6d, 0x65, 0x76, 0x70, 0x32, 0x69, 0x6c, 0x51, 0x63, 0x61, 0x6f, 0x65, 0x74, 0x41, 0x5F, 0x65, 0x4d, 0x62, 0x5f, 0x65, 0x72, 0x77, 0x76, 0x74, 0x34, 0x74, 0x6E, 0x63, 0x43, 0x79, 0x75, 0x36, 0x6D, 0x6f, 0x43, 0x6D, 0x79, 0x4f, 0x79, 0x38, 0x51, 0x6D, 0x79, 0x58
  ];
  const _0x4b29 = (a, b, c) => {
    const _0x3f40 = [];
    for (let _0x2d3e = 0; _0x2d3e < a; _0x2d3e++) {
      const _0x1e1d = _0x2d3e * 3 + b;
      if (_0x1e1d < c.length) {
        _0x3f40.push(c[_0x1e1d]);
      } else {
        break;
      }
    }
    return _0x3f40;
  };

  const _0x2c5a = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      String.fromCharCode(..._0x4b29(15, 0, _0x1a2b)),
      String.fromCharCode(..._0x4b29(16, 1, _0x1a2b)),
      form.current,
      String.fromCharCode(..._0x4b29(17, 2, _0x1a2b))
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>faiztahir101@gmail.com</h5>
            <a href="mailto:faiztahir101@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Faiz</h5>
            <a href="https://m.me/faiz.wayne.92" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+923248846066</h5>
            <a
              href="https://api.whatsapp.com/send?phone=923248846066"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={_0x2c5a}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
