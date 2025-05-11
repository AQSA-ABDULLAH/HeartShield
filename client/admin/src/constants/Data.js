// import { GiGymBag } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";
import {IoMdSettings} from 'react-icons/io'
import {CgWebsite} from 'react-icons/cg';
import { AiFillHome } from "react-icons/ai";

export const Main = [
  {
    icon: <AiFillHome size={20} />,
    text: "Home",
    route:'/'
  },

  {
    icon: <FaUsers size={20} />,
    text: "Patient Mangment",
    route:'/manage-patient'
  },
  {
    icon: <FaUsers size={20}/>,
    text: "Doctor Managment",
    route:'/manage-doctor'
  },
];