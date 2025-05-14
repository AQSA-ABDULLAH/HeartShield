// import { GiGymBag } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

export const Main = [
  {
    icon: <AiFillHome size={20} />,
    text: "Home",
    route:'/' // ✅ This is correct for home
  },
  {
    icon: <FaUsers size={20} />,
    text: "Patient Mangment",
    route:'/manage-patient' // ✅ This is correct
  },
  {
    icon: <FaUsers size={20}/>,
    text: "Doctor Managment",
    route:'/manage-doctor'
  },
];
