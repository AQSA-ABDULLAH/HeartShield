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
    text: "Review Cases",
    route:'/review-cases' // ✅ This is correct
  },
  {
    icon: <FaUsers size={20}/>,
    text: "Approved Reports",
    route:'/approved-reports'
  },
    {
    icon: <FaUsers size={20}/>,
    text: "Notifications",
    route:'/notifications'
  },
    {
    icon: <FaUsers size={20}/>,
    text: "Settings",
    route:'/settings'
  },
];
