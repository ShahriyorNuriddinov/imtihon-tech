import React from "react";
import { CiLocationOn, CiUser, CiFacebook, CiYoutube } from "react-icons/ci";
import { MdPhoneInTalk, MdOutlineMarkEmailRead } from "react-icons/md";
import { FaChevronRight, FaTwitter, FaInstagram, FaChevronUp } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

const footerLinks = [
  {
    title: "Company",
    items: ["about us", "blog", "returns", "order status"],
  },
  {
    title: "Info",
    items: ["How it works?", "our promises", "FAQ"],
  },
];

const contactInfo = [
  { icon: <CiLocationOn />, text: "123 Main Street, Anytown,USA" },
  { icon: <MdPhoneInTalk />, text: "+1 (555) 123-4567" },
  { icon: <MdOutlineMarkEmailRead />, text: "TechHeimSupport@gmail.com" },
];

const socialIcons = [
  <CiFacebook />,
  <FaTwitter />,
  <FaInstagram />,
  <CiYoutube />,
];

const Footer = () => {
  return (
    <footer className="bg-[#021736] py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-medium text-base text-white font-Inter mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="font-light text-base leading-[150%] font-Inter text-[#cbcbcb] hover:text-white transition-colors cursor-pointer capitalize"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-4">
            <h3 className="font-medium text-base text-white font-Inter mb-4">
              Contact us
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((c, i) => (
                <li
                  key={i}
                  className="font-light text-base leading-[150%] font-Inter text-[#cbcbcb] flex items-start gap-2"
                >
                  <span className="text-white mt-0.5">{c.icon}</span>
                  <span>{c.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-medium text-base text-white font-Inter">
                Sign up for News and updates
              </h3>
              <form className="rounded-lg border border-[#f9f9f9] text-white flex items-center gap-3 px-3 py-2 hover:border-[#aecdfb] transition-colors">
                <CiUser className="text-[#cbcbcb]" />
                <input
                  className="outline-none border-none w-full bg-transparent py-1 placeholder-[#cbcbcb] text-sm"
                  type="email"
                  placeholder="E-mail Address"
                />
                <button type="submit" className="text-[#cbcbcb] hover:text-white transition-colors">
                  <FaChevronRight />
                </button>
              </form>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-base text-white font-Inter">Follow us</h3>
              <ul className="flex items-center gap-4 text-xl text-[#cbcbcb]">
                {socialIcons.map((icon, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-white transition-colors">
                      {icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
             <div className="flex flex-col justify-between items-center gap-3">
            <button className="size-9 flex items-center justify-center bg-[#aecdfb] rounded-full hover:bg-[#8fb9fa] transition-colors">
              <IoChatboxEllipsesOutline className="text-xl text-[#021736]" />
            </button>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="size-9 flex items-center justify-center bg-[#aecdfb] rounded-full hover:bg-[#8fb9fa] transition-colors"
            >
              <FaChevronUp className="text-black text-xl" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;