"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import axios from "axios";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

const INPUT_CLS =
  "w-full rounded-lg border border-line bg-canvas px-3 py-2 text-ink outline-0 ring-0 transition-colors duration-300 focus:border-accent";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    };

    try {
      setIsLoading(true);
      await axios.post("/api/contact", userInput);

      toast.success("Message sent successfully!");
      setUserInput({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    };
  };

  return (
    <form onSubmit={handleSendMail} noValidate className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-name" className="text-sm font-medium text-ink">Your name</label>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            className={INPUT_CLS}
            type="text"
            maxLength="100"
            required={true}
            onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
            onBlur={checkRequired}
            value={userInput.name}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-email" className="text-sm font-medium text-ink">Your email</label>
          <input
            id="contact-email"
            name="email"
            autoComplete="email"
            className={INPUT_CLS}
            type="email"
            maxLength="100"
            required={true}
            value={userInput.email}
            onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
            onBlur={() => {
              checkRequired();
              setError({ ...error, email: !isValidEmail(userInput.email) });
            }}
          />
          {error.email && <p className="text-sm text-red-700">Please provide a valid email!</p>}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="text-sm font-medium text-ink">Your message</label>
        <textarea
          id="contact-message"
          className={INPUT_CLS}
          maxLength="500"
          name="message"
          required={true}
          onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
          onBlur={checkRequired}
          rows="4"
          value={userInput.message}
        />
      </div>

      <div className="flex flex-wrap items-center justify-end gap-3">
        {error.required && <p className="mr-auto text-sm text-red-700">
          All fields are required!
        </p>}
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white shadow-md shadow-accent/20 transition-colors hover:bg-accent-strong disabled:cursor-not-allowed disabled:opacity-70"
          disabled={isLoading}
        >
          {
            isLoading ?
            <span>Sending Message...</span>:
            <>
              Send Message
              <TbMailForward size={18} aria-hidden="true" />
            </>
          }
        </button>
      </div>
    </form>
  );
};

export default ContactForm;