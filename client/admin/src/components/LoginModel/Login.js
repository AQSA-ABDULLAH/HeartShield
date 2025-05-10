import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { signUpWithEmail } from "../redux/containers/auth/actions";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Login() {
     const [email, setEmail] = useState('aqsaabdullah5834@gmail.com');
      const [password, setPassword] = useState('qwerty12345');
      const [showPassword, setShowPassword] = useState(false);
      const [isEmailValid, setEmailValid] = useState(true);
      const [isPasswordValid, setPasswordValid] = useState(true);
      const { loading, error, payload } = useSelector((state) => state?.auth);
      const dispatch = useDispatch();
      const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
      };
    
      console.log(loading, error, payload);
      const handleSubmit = (e) => {
        e.preventDefault();
        let userData = {
          "email": email,
          "password": password,
        }
        if (email) {
          setEmailValid(true);
          if (password) {
            setPasswordValid(true);
            dispatch(signUpWithEmail(userData))
          }
    
        } else {
          setEmailValid(false);
          setPasswordValid(false);
        }
      }
    
      const handleChange = (event, type) => {
        if (type === 'email') {
          setEmail(event.target.value);
        } else {
          setPassword(event.target.value);
        }
      }
  

  return (
    <div className="min-h-screen flex bg-[#2D0101] text-white font-inter">
      {/* Left Side (Image + Text) */}
      <div className="hidden md:flex w-1/2 relative justify-center">
        <img
          src="/assest/login.png"
          alt="Heart with stethoscope"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute z-10 bottom-[61px] px-[150px]">
          <h1 className="text-[32px] font-bold mb-4 leading-[48px]">HeartShield</h1>
          <p className='text-[14px] leading-[27px] tracking-[1px]'>
          Revolutionizing heart health monitoring with artificial intelligence
          </p>
        </div>
      </div>

      {/* Right Side (Login Form) */}
      <div className="w-full md:w-1/2 bg-[#FFFFF] flex items-center justify-center px-[140px] py-12">
        <div className="w-full max-w-md space-y-[30px]">
          <h2 className="text-[32px] font-bold leading-[48px]">Welcome Back</h2>
          <p className="text-[16px] text-[#999] leading-[24px]">Please enter your credentials to access your account</p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm mb-1">Email Address</label>
              <input
              onChange={handleChange}
              name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full px-[14px] py-2 bg-[#B55151] text-white rounded-md focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[14px] mb-1">Password</label>
              <input
              onChange={handleChange}
                name="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 bg-[#B55151] text-white rounded-md focus:outline-none"
              />
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <Link to="#" className="text-[#FF4444] hover:underline">Forgot Password?</Link>
            </div>
              
              
              {/* Submit Button */}
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-[#580101] hover:bg-red-800 text-white font-semibold py-2 rounded-md"
            >
              Sign In
            </button>
          </form>

          <p className="text-sm text-gray-400 text-center">
            Don’t have an account? <Link to="/signup" className="text-[#FF4444] hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;