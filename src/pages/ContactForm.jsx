import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    emailjs
      .sendForm(
        "service_3l6z26w",        // Your EmailJS service ID
        "template_9rk5ria",       // Your EmailJS template ID
        form.current,
        "X9UwrR81yAmo47nUT"       // Your EmailJS public key
      )
      .then(
        () => {
          setLoading(false);
          setFeedback({
            type: "success",
            message: "✅ Message delivered successfully!",
          });
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setFeedback({
            type: "error",
            message: `❌ Failed to send message: ${error.text}`,
          });
        }
      );
  };

  return (
    <section
      className="pt-[80px] pb-[80px] min-h-screen flex justify-center items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-lg w-full bg-white/20 backdrop-blur-lg rounded-xl p-8 space-y-6 shadow-lg border border-white/30"
      >
        <h2 className="text-3xl font-bold text-center text-gray-700 drop-shadow">
          Contact Me
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-md bg-white/25 text-gray-900 placeholder:text-gray-700 border border-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          disabled={loading}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-md bg-white/25 text-gray-900 placeholder:text-gray-700 border border-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          disabled={loading}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          required
          className="w-full p-3 rounded-md bg-white/25 text-gray-900 placeholder:text-gray-700 border border-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          disabled={loading}
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className={`w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition ${
            loading ? "cursor-not-allowed opacity-70" : ""
          }`}
        >
          {loading && (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          )}
          {loading ? "Sending..." : "Send Message"}
        </button>

        {feedback && (
          <p
            className={`text-center font-semibold transition duration-300 ${
              feedback.type === "success"
                ? "text-green-300"
                : "text-red-300"
            }`}
          >
            {feedback.message}
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;
