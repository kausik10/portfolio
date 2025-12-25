import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { siteConfig } from "../config/site";
import emailjs from "@emailjs/browser";
// interface FormData {
//   name: string;
//   message: string;
// }

const Footer = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const SERVICE_ID = import.meta.env.VITE_EMAIL_JS_SERVICE_ID as string;
  const TEMPLATE_ID = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID as string;
  const PUBLIC_KEY = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY as string;

  const sendEmail = (data: any) => {
    setIsSubmitting(true);

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: data.name,
          message: data.message,
        },
        PUBLIC_KEY,
      )
      .then(
        () => {
          console.log("SUCCESS!");
          reset();
          setIsSubmitting(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSubmitting(false);
        },
      );
  };

  return (
    <footer
      id="footer"
      className="z-20 w-full bg-dark_nav py-8 text-light_text drop-shadow-2xl"
    >
      <div className="container mx-auto flex flex-col items-center justify-center space-y-8 md:flex-row md:space-y-0">
        {/* Left Section - Social Links */}
        <div className="W-[90%] flex flex-col space-y-4 md:w-1/3">
          <h2 className="text-2xl font-bold md:text-3xl">
            Connect with me on socials
          </h2>
          <div className="flex flex-col space-y-4">
            <Link
              to={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-3 hover:text-primary_border"
            >
              <FaGithub className="text-2xl transition-colors  md:text-3xl" />
              <span className="text-lg font-light md:text-xl">GitHub</span>
            </Link>
            <Link
              to={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-3 hover:text-primary_border"
            >
              <FaLinkedin className="text-2xl transition-colors hover:text-primary_btn md:text-3xl" />
              <span className="text-lg font-light md:text-xl">LinkedIn</span>
            </Link>
            <Link
              to={siteConfig.links.instagram}
              target="_blank"
              className="flex items-center space-x-3 hover:text-primary_border"
            >
              <FaInstagram className="text-2xl transition-colors hover:text-primary_btn md:text-3xl" />
              <span className="text-lg font-light md:text-xl">Instagram</span>
            </Link>
            <Link
              to={siteConfig.links.facebook}
              target="_blank"
              className="flex items-center space-x-3 hover:text-primary_border"
            >
              <FaFacebookF className="text-2xl transition-colors hover:text-primary_btn md:text-3xl" />
              <span className="text-lg font-light md:text-xl">Facebook</span>
            </Link>
          </div>
        </div>

        {/* Middle Section - Contact Form */}
        <div className="w-[90%] rounded-lg border border-light_text p-4 md:w-1/3">
          <h2 className="mb-4 text-xl font-semibold">Send me a message</h2>
          <form
            onSubmit={handleSubmit(sendEmail)}
            className="flex flex-col space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: true })}
              className="rounded border border-secondary_border p-2"
              required
            />
            <textarea
              placeholder="Your Message"
              {...register("message", { required: true })}
              className="rounded border border-secondary_border p-2"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded bg-primary_btn px-4 py-2 text-light_text transition-colors hover:bg-secondary_btn hover:text-dark_text"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>

      {/* tapering hr */}
      <div className="my-8">
        <hr className="mx-auto h-1 w-2/3 border-0 bg-gradient-to-r from-transparent via-light_text to-transparent" />
      </div>

      {/* Copyright */}
      <div className="mt-8 w-full text-center">
        <p className="text-sm">
          &copy; 2024 v0.1 Made with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
