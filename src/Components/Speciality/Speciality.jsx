import { FaCheck, FaPhoneAlt, FaTruck } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const Speciality = () => {
  return (
    <div className="md:max-w-4xl md:mx-4 md:gap-2  lg:max-w-7xl lg:mx-auto px-8 py-4 md:p-10 bg-blue-400 md:rounded-md lg:rounded-lg lg:-mt-12 cursor-pointer mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-20 justify-center items-center">
        <div className="flex items-center gap-4 lg:text-xl font-bold border-e-2 md:rounded-2xl hover:scale-100 hover:animate-pulse text-white ">
          <FaCheck className="text-xl md:text-3xl " />
          <h2>Quality</h2>
        </div>
        <div className="flex items-center gap-4 lg:text-xl font-bold border-e-2 md:rounded-2xl hover:scale-100 hover:animate-pulse text-white ">
          <FaTruck className="text-xl md:text-3xl" />
          <h2>Shipping</h2>
        </div>
        <div className="flex items-center gap-4 lg:text-xl font-bold border-e-2 md:rounded-2xl hover:scale-100 hover:animate-pulse text-white">
          <FaArrowRightArrowLeft className="text-xl md:text-3xl" />
          <h2>2 Days Return</h2>
        </div>
        <div className="flex items-center gap-4 lg:text-xl font-bold border-e-2 md:rounded-2xl hover:scale-100 hover:animate-pulse text-white">
          <FaPhoneAlt className="text-xl md:text-3xl" />
          <h2>24 / 7 Support</h2>
        </div>
      </div>
    </div>
  );
};

export default Speciality;
