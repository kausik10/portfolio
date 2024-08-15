import { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

// interface FormData {
//   name: string;
//   message: string;
// }

const Footer = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmitHandler = (data: any) => {
    setIsSubmitting(true);
  
    
    const subject = encodeURIComponent(`Message from ${data.name}`);
    const body = encodeURIComponent(data.message);
    const gmailComposeURL = `https://mail.google.com/mail/?view=cm&fs=1&to=kausikpaudel@gmail.com&su=${subject}&body=${body}`;
    
    window.open(gmailComposeURL, '_blank');

    reset();
    setIsSubmitting(false);
  
};
  return (
   
   
    <footer id="footer" className="bg-dark_nav drop-shadow-2xl w-full text-light_text py-8 z-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0">
        {/* Left Section - Social Links */}
        <div className="W-[90%] flex flex-col md:w-1/3 space-y-4">
          <h2 className="md:text-3xl text-2xl font-bold">Connect with me on socials</h2>
          <div className="flex flex-col space-y-4">
            <Link to='https://www.github.com/kausik10' target='_blank' className="hover:text-primary_border flex items-center space-x-3">
              <FaGithub className="text-2xl md:text-3xl  transition-colors" />
              <span className='text-lg md:text-xl font-light'>GitHub</span>
            </Link>
            <Link to='https://www.linkedin.com/in/kausik-paudel' target='_blank' className="hover:text-primary_border flex items-center space-x-3">
              <FaLinkedin className="text-2xl md:text-3xl hover:text-primary_btn transition-colors" />
              <span className='text-lg md:text-xl font-light'>LinkedIn</span>
            </Link>
            <Link to='https://www.instagram.com/seek.mee/' target='_blank' className="hover:text-primary_border flex items-center space-x-3">
              <FaInstagram className="text-2xl md:text-3xl hover:text-primary_btn transition-colors" />
              <span className='text-lg md:text-xl font-light'>Instagram</span>
            </Link>
            <Link to='https://www.facebook.com/kausik.paudel.3' target='_blank' className="hover:text-primary_border flex items-center space-x-3">
              <FaFacebookF className="text-2xl md:text-3xl hover:text-primary_btn transition-colors" />
              <span className='text-lg md:text-xl font-light'>Facebook</span>
            </Link>
          </div>
        </div>

        {/* Middle Section - Contact Form */}
        <div className="w-[90%] md:w-1/3 border border-light_text p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Send me a message</h2>
          <form onSubmit={handleSubmit(onSubmitHandler)} className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              {...register('name', { required: true })}
              className="p-2 border border-secondary_border rounded"
              required
            />
            <textarea
              placeholder="Your Message"
              {...register('message', { required: true })}
              className="p-2 border border-secondary_border rounded"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary_btn text-light_text hover:text-dark_text py-2 px-4 rounded hover:bg-secondary_btn transition-colors"
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </div>

{/* tapering hr */}
      <div className="my-8">
        <hr className="border-0 h-1 bg-gradient-to-r from-transparent via-light_text to-transparent mx-auto w-2/3" />
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 w-full">
        <p className="text-sm">
          &copy; 2024 v0.1 Made with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
