const customerAssurance = [
  {
    icon: "/images/checkMark.svg",
    header: "Unbeatable Quality",
    description:
      "We meticulously source and verify every product to ensure 100% authenticity and the highest quality standards. Shop with confidence, knowing you're getting the real deal, every time.",
  },
  {
    icon: "/images/support.svg",
    header: "Dedicated Support",
    description:
      "Have a question or need assistance? Our friendly and knowledgeable customer service team is always ready to help, ensuring a smooth and enjoyable experience from start to finish.",
  },
  {
    icon: "/images/security.svg",
    header: "Secure Shopping",
    description:
      "Shop with peace of mind. Our advanced encryption and secure payment gateways protect your personal and financial information, making every transaction safe and smooth.",
  },
];

function CustomerAssurance() {
  return (
    <div className="bg-[#f0f0f0] mt-20 flex justify-start items-start">
      {customerAssurance.map((assurance) => (
        <div
          key={assurance.header}
          className="text-center w-[50%] m-auto py-10 h-[10rem] lg:h-[18.5rem]"
        >
          <div className="border-[#868686] px-4 border-l-1">
            <span className="w-[18%] block m-auto  lg:w-[10%]">
              <img className="w-full" src={assurance.icon} alt="" />
            </span>
            <div className="px-4">
              <h3 className="font-semibold my-4">{assurance.header}</h3>
              <p className="hidden lg:block">{assurance.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CustomerAssurance;
