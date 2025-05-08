import React from "react";
import { toast, ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const formInputData = Object.fromEntries(formData.entries());

    console.log("Form Data:", formInputData);

    try {
      const response = await fetch("https://formspree.io/f/meoalrgr", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        toast.success("📬 Message delivered! We'll get back to you soon 😄", {
          icon: "✅",
          theme: "dark",
          autoClose: 4000,
        });
        form.reset();
      } else {
        toast.error("⚠️ Oops! Something went wrong, please try again.", {
          icon: "❌",
          theme: "dark",
        });
      }
    } catch (error) {
      toast.error("🌐 Network issue! Check your internet and try again.", {
        icon: "🔌",
        theme: "dark",
      });
    }
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            name="username"
            required
            autoComplete="off"
          />

          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            name="email"
            required
            autoComplete="off"
          />

          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="off"
          ></textarea>

          <button type="submit">🚀 Send Message</button>
        </form>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        transition={Slide}
        theme="dark"
        toastClassName="custom-toast"
      />
    </section>
  );
};

export default Contact;
