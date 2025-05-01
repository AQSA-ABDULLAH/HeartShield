import React from 'react';
import LoginModal from '../components/LoginModal/LoginModal';

function Login() {
  return (
    <div>
      <LoginModal />
    </div>
  );
}

export default Login;

// import React from 'react';

// function Login() {
//   return (
//     <div className="min-h-screen flex">
//       {/* Left Side (Image + Text) */}
//       <div className="hidden md:flex w-1/2 bg-black text-white items-center justify-center relative">
//         <img
//           src="/heart-login.jpg"
//           alt="Heart with stethoscope"
//           className="absolute inset-0 w-full h-full object-cover opacity-40"
//         />
//         <div className="z-10 text-center px-8">
//           <h1 className="text-3xl font-bold mb-4">HeartSheild</h1>
//           <p className="text-gray-300">
//             Revolutionizing heart health monitoring <br /> with artificial intelligence
//           </p>
//         </div>
//       </div>

//       {/* Right Side (Login Form) */}
//       <div className="w-full md:w-1/2 bg-[#330000] text-white flex items-center justify-center px-8 py-12">
//         <div className="w-full max-w-md space-y-6">
//           <h2 className="text-3xl font-bold">Welcome Back</h2>
//           <p className="text-sm text-gray-300">Please enter your credentials to access your account</p>

//           <form className="space-y-5">
//             <div>
//               <label className="block text-sm mb-1">Email Address</label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full px-4 py-2 bg-[#5e0b0b] text-white rounded-md focus:outline-none"
//               />
//             </div>

//             <div>
//               <label className="block text-sm mb-1">Password</label>
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="w-full px-4 py-2 bg-[#5e0b0b] text-white rounded-md focus:outline-none"
//               />
//             </div>

//             <div className="flex justify-between items-center text-sm">
//               <label className="flex items-center">
//                 <input type="checkbox" className="mr-2" />
//                 Remember me
//               </label>
//               <a href="#" className="text-red-300 hover:underline">Forgot Password?</a>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-2 rounded-md"
//             >
//               Sign In
//             </button>
//           </form>

//           <p className="text-sm text-gray-400 text-center">
//             Don’t have an account? <a href="#" className="text-red-400 hover:underline">Sign up</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
