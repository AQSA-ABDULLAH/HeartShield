import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import * as validate from "../../utils/validations/Validations";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../../firebase";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const [license, setLicense] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    license: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    let error = "";
    switch (name) {
      case "fullName":
        if (!validate.name(value))
          error = "Name cannot have special characters or digits";
        break;
      case "email":
        if (!validate.email(value)) error = "Email must fulfill requirements";
        break;
      case "password":
        if (!validate.password(value))
          error = "Password must fulfill requirements";
        break;
      case "confirmPassword":
        if (value !== formData.password) error = "Passwords do not match";
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handelImage = () => {
    inputRef.current.click();
  };

  useEffect(() => {
    if (license) {
      uploadFile(license);
    }
  }, [license]);

  const uploadFile = (file) => {
    const storage = getStorage(app);
    const storageRef = ref(storage, "LicenseImages/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.error("Upload error code:", error.code);
        console.error("Upload error message:", error.message);
        console.error("Full error:", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUrl(downloadURL);
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Passwords do not match",
      }));
      return;
    }

    const hasError = Object.values(errors).some((err) => err);
    if (!hasError) {
      axios
        .post(`${API_URL}/api/doctor/doctor_signUp`, {
          ...formData,
          license: imageUrl, // Attach uploaded image URL
        })
        .then((response) => {
          console.log("API response:", response.data);
          navigate("/login");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <div className="min-h-screen flex bg-[#2D0101]">
      <div className="hidden md:flex relative w-[50%] bg-[#5c4444] text-white">
        <img
          src="/assest/doctor-signup.png"
          alt="doctors-image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute z-10 bottom-[61px] px-[40px]">
          <h1 className="text-[32px] font-bold mb-4 leading-[48px]">
            HeartShield
          </h1>
          <p className="text-[14px] leading-[27px] tracking-[1px] w-[331px]">
            Join our network of healthcare professionals in revolutionizing
            cardiac care
          </p>
        </div>
      </div>

      <div className="w-[50%] p-[80px] text-[#FFFF] flex flex-col justify-center">
        <h2 className="text-[32px] font-bold mb-[12px]">Doctor Registration</h2>
        <p className="text-[#999999] mb-[42px] text-[16px]">
          Create your account to start monitoring your heart health
        </p>

        <form onSubmit={handleSubmit} className="text-[14px] space-y-[24px]">
          <div>
            <label className="block mb-[6px]">Full Name</label>
            <input
              name="fullName"
              type="text"
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-2 bg-[#722626] text-white rounded border border-transparent focus:outline-none focus:border-[#580101]"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label className="block mb-[6px]">Email Address</label>
            <input
              name="email"
              type="email"
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-[#722626] text-white rounded border border-transparent focus:outline-none focus:border-[#580101]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block mb-[6px]">Medical License Upload</label>

            {/* Styled button to trigger file input */}
            <div
              onClick={handelImage}
              className="w-full px-4 py-2 bg-[#722626] text-white rounded border border-transparent text-center cursor-pointer hover:bg-[#8d3b3b]"
            >
              {license ? license.name : "Upload Medical License"}
            </div>

            {/* Hidden file input */}
            <input
              type="file"
              id="license"
              accept="image/png, image/jpeg"
              required
              ref={inputRef}
              onChange={(e) => {
                if (e.target.files[0]) {
                  setLicense(e.target.files[0]);
                }
              }}
              className="hidden"
            />
          </div>

          <div>
            <label className="block mb-[6px]">Password</label>
            <input
              name="password"
              type="password"
              onChange={handleChange}
              placeholder="Create password"
              className="w-full px-4 py-2 bg-[#722626] text-white rounded border border-transparent focus:outline-none focus:border-[#580101]"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <div>
            <label className="block mb-[6px]">Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              onChange={handleChange}
              placeholder="Confirm password"
              className="w-full px-4 py-2 bg-[#722626] text-white rounded border border-transparent focus:outline-none focus:border-[#580101]"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>

          <div className="py-[40px]">
            <button
              type="submit"
              className="w-full py-2 bg-[#580101] hover:bg-red-800 rounded"
            >
              Create Account
            </button>
          </div>
        </form>

        <p className="text-sm mt-4 text-center text-gray-300">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#FF4444] hover:underline cursor-pointer"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
