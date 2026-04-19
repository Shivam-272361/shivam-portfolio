import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const form = useRef(null);
  const [isSending, setIsSending] = useState(false);


  const sendEmail = async (e) => {
    e.preventDefault();

    if (!form.current) {
      toast.error("The contact form is not ready yet. Please refresh and try again.", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error("Missing EmailJS environment variables.", {
        serviceId: EMAILJS_SERVICE_ID,
        templateId: EMAILJS_TEMPLATE_ID,
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      toast.error("Email is not configured yet. Check the EmailJS environment variables.", {
        position: "top-right",
        autoClose: 4000,
        theme: "dark",
      });
      return;
    }

    setIsSending(true);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      form.current.reset();
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please verify your EmailJS IDs and template fields.", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-shell flex flex-col items-center justify-center bg-[#020617] px-[12vw] py-24 md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer
        position="top-right"
        toastStyle={{ marginTop: "5.5rem" }}
        style={{ zIndex: 300 }}
      />

      <div className="section-heading">
        <h2 className="section-title">Contact</h2>
        <div className="section-divider" />
        <p className="mx-auto mt-4 max-w-md text-base font-medium leading-relaxed text-slate-300/80">
          I'd love to hear from you - reach out for any opportunities or
          questions!
        </p>
      </div>

      <div className="glass-panel tech-outline w-full max-w-lg rounded-2xl p-8">
        <h3 className="mb-6 text-center font-mono text-lg font-semibold uppercase tracking-[0.18em] text-cyan-200">
          Connect With Me
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="h-11 w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 text-sm text-white transition-colors placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
            />
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="h-11 w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 text-sm text-white transition-colors placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="h-11 w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 text-sm text-white transition-colors placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            required
            className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white transition-colors placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
          />

          <button
            type="submit"
            disabled={isSending}
            className="hero-button h-11 w-full rounded-xl px-4 py-0 text-sm disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
