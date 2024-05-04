import { useState } from "react";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(null);
  const handleToggle = (idx) => setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

  const datas = [
    {
      title: "Refund policy",
      color: "green",
      description:
        'Refunds are available for items that are damaged, defective, or significantly different',
    },
    {
      title: "Return process",
      color: "sky",
      description:
        "To initiate a return, please contact our customer support team.  Provide your order number, a description of the issue, and any relevant photographs. Our team will assess your request and provide instructions on how to return the item.",
    },
    {
      title: "Can I change my shipping address after placing an order?",
      color: "purple",
      description:
        "Yes, you may be able to change your shipping address after placing an order, depending on the stage of processing. Please contact our customer support team as soon as possible with your order details and the updated shipping address. While we will do our best to accommodate your request, changes may not be possible if the order has already been processed or shipped.",
    },
    {
      title: " How long does delivery take after placing an order?",
      color: "amber",
      description:
        " Delivery times vary depending on your location, shipping method selected during checkout, and the availability of the items you've ordered. Generally, orders are reached within 3 business days.",
    },
    {
      title: " I need urgent support. How can I get in touch with you?",
      color: "red",
      description:
        "You can reach our customer support team by phone at +01545431346. Alternatively, you can email us at support@trendyware.com. Please include URGENT in the subject line so that we can prioritize your inquiry. Our team will respond to your email as soon as possible.",
    },
  ];
  return (
    <div className="bg-gray-50">
    <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl text-center py-8 font-primaryFont">Questions & Clarifications</h2>
    <div className="space-y-4 p-2 md:p-6">
      {datas?.map((data, idx) => (
        <div key={idx}>
          {/* header / Title */}
          <div
            onClick={() => handleToggle(idx)}
            className={`px-4 md:px-8 py-6 ${
              idx === 0
                ? "bg-green-50 border-green-500"
                : idx === 1
                ? "bg-sky-50 border-sky-500"
                : idx === 2
                ? "bg-purple-50 border-purple-500"
                : idx === 3
                ? "bg-amber-50 border-amber-500"
                : idx === 4
                ? "bg-red-50 border-red-500"
                : "bg-orange-50 border-orange-500"
            } border-l-[3px] cursor-pointer`}
          >
            <div className="flex items-center">
              <span>
                <svg
                  className={`mr-4 ${
                    idx === 0
                      ? "fill-green-900"
                      : idx === 1
                      ? "fill-sky-900"
                      : idx === 2
                      ? "fill-purple-900"
                      : idx === 3
                      ? "fill-amber-900"
                      : idx === 4
                      ? "fill-red-900"
                      : "fill-orange-900"
                  } shrink-0`}
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transform origin-center transition duration-200 ease-out ${
                      isOpen === idx && "!rotate-180"
                    }`}
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                      isOpen === idx && "!rotate-180"
                    }`}
                  />
                </svg>
              </span>
              <h4
                className={`${
                  idx === 0
                    ? "text-green-900"
                    : idx === 1
                    ? "text-sky-900"
                    : idx === 2
                    ? "text-purple-900"
                    : idx === 3
                    ? "text-amber-900"
                    : idx === 4
                    ? "text-red-900"
                    : "text-orange-900"
                } text-xl`}
              >
                {data.title}
              </h4>
            </div>
          </div>
          {/* body / content  */}
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out   ${
              isOpen === idx
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div
                className={`pb-6 pr-4 pl-14 md:pl-16 border-l-[3px] text-sm  ${
                  idx === 0
                    ? "text-green-900 bg-green-50 border-green-500"
                    : idx === 1
                    ? "text-sky-900 bg-sky-50 border-sky-500"
                    : idx === 2
                    ? "text-purple-900 bg-purple-50 border-purple-500"
                    : idx === 3
                    ? "text-amber-900 bg-amber-50 border-amber-500"
                    : idx === 4
                    ? "text-red-900 bg-red-50 border-red-500"
                    : "text-orange-900 bg-orange-50 border-orange-500"
                } `}
              >
                {data?.description}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default FAQ;
