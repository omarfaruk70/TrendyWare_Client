import { IoLocation, IoMail, IoCall, IoArrowForward } from "react-icons/io5";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaDribbble,
} from "react-icons/fa";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Footer = () => {
  const date = new Date();
  const fullYear = date.getFullYear();
  return (
    <footer className="font-primaryFont p-10 bg-neutral text-neutral-content">
      <section className="footer mb-6">
      <nav className="text-xl">
        <img
          src="/logo.svg"
          alt="brand-image"
          className="rounded-tl-full rounded-bl-full rounded-tr-full w-20 h-20 md:w-32 md:h-32 mb-3"
        />
        <div className="flex justify-center items-center gap-4">
          <IoLocation className="text-xl" />
          <p>Dhaka, Bangladesh</p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <IoMail className="text-xl" />
          <a href="mailto:farukfci70@gmail.com">farukfci70@email.com</a>
        </div>
        <div className="flex justify-center items-center gap-4">
          <IoCall className="text-xl" />
          <a href="tell:+8801881937170">01881937170</a>
        </div>
      </nav>
      <nav className="text-xl">
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Privacy</a>
        <a className="link link-hover">Refund</a>
        <a className="link link-hover">Delivery process</a>
      </nav>
      <nav className="text-xl">
        <h6 className="footer-title">Category</h6>
        <a className="link link-hover">Mans Fashion</a>
        <a className="link link-hover">Womens Fashion</a>
        <a className="link link-hover">NewBorn Babies</a>
        <a className="link link-hover">Sunglass</a>
        <a className="link link-hover">Footware</a>
      </nav>
      <nav className="text-xl">
        <h6 className="footer-title">Follow us</h6>
        <div className="flex gap-6">
          <FaFacebook className="hover:text-yellow-300 cursor-pointer hover:animate-ping" />
          <FaTwitter className="hover:text-yellow-300 cursor-pointer hover:animate-ping" />
          <FaInstagram className="hover:text-yellow-300 cursor-pointer hover:animate-ping" />
          <FaLinkedin className="hover:text-yellow-300 cursor-pointer hover:animate-ping" />
          <FaDribbble className="hover:text-yellow-300 cursor-pointer hover:animate-ping" />
        </div>
        <div className="mt-4">
          <h2 className="md:text-2xl pb-4">Subscibe newslatter</h2>
          <div className="relative">
            <input
              type="text"
              name="email"
              id="email"
              className="focus:outline-yellow-600 w-64 md:w-72 h-12 p-2 rounded-full bg-slate"
              placeholder="Enter your email"
            />
            <button
              className="btn bg-yellow-300 text-white absolute right-0 text-xl rounded-full"
              type="button"
              value="Send"
            >
              Send <IoArrowForward />
            </button>
          </div>
        </div>
      </nav>
    </section>
    <div className="h-16 w-16 rounded-full p-5 flex justify-center absolute right-20 -mt-8 bg-yellow-600 text-blue-300">
      <ScrollToTop></ScrollToTop>
    </div>
    <hr />
    <div className="mt-5 flex flex-col md:flex-row justify-around">
      <div>
      <h2>Copyright  &copy; 2023 - {fullYear} || All right reserverd By <a className="text-yellow-400" href="https://www.linkedin.com/in/omarfaruk70">Omar Faruk</a></h2>
      </div>
      <div className="flex md:flex-row gap-2 md:gap-4">
        <img className="h-12 w-16" src="/bkash.svg" alt="" />
        <img className="h-12 w-16" src="/mastercard.svg" alt="" />
        <img className="h-12 w-16" src="/Nagad.png" alt="" />
        <img className="h-12 w-16" src="/visa.svg" alt="" />
      </div>
    </div>
    </footer>

  );
};

export default Footer;
