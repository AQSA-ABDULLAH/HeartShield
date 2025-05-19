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
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
<path d="M15 19V17C15 15.9391 14.5786 14.9217 13.8284 14.1716C13.0783 13.4214 12.0609 13 11 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19M11 5C11 7.20914 9.2091 9 7 9C4.79086 9 3 7.20914 3 5C3 2.79086 4.79086 1 7 1C9.2091 1 11 2.79086 11 5Z" stroke="white" stroke-width="2"/>
</svg>,
    text: "Patient Mangment",
    route:'/manage-patient' // ✅ This is correct
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
<path d="M15 19V17C15 15.9391 14.5786 14.9217 13.8284 14.1716C13.0783 13.4214 12.0609 13 11 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19M11 5C11 7.20914 9.2091 9 7 9C4.79086 9 3 7.20914 3 5C3 2.79086 4.79086 1 7 1C9.2091 1 11 2.79086 11 5Z" stroke="white" stroke-width="2"/>
</svg>,
    text: "Doctor Managment",
    route:'/manage-doctor'
  },
];
