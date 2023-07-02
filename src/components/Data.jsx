import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      mobile: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/mohammed-ilyes-aboura-b757b427b/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      mobile: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/ABOURA-Mohammed-Ilyes",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      mobile: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:abouramohammedilyes@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      mobile: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      style: "rounded-br-md",
      href: "/resume.pdf",
      download: true,
    },
  ];