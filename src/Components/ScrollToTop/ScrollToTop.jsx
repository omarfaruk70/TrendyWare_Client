import { FaArrowUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const ScrollToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
  };
  return (
    <div className="cursor-pointer" onClick={ScrollToTop}>
      <div>
        <FaArrowUp className=" text-2xl -mt-1 md:text-3xl font-bold text-white animate-bounce" />
      </div>
    </div>
  );
};

export default ScrollToTop;
