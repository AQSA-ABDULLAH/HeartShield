import { useState } from "react";
import axios from "axios"; // Make sure to install: npm install axios
import { jwtDecode } from "jwt-decode";


export default function Uploader() {
  // State for form fields
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Select gender");
  const [cholesterol, setCholesterol] = useState("");
  const [smoking, setSmoking] = useState("Select smoking history");
  const [bloodPressure, setBloodPressure] = useState("");
  const [ecgFile, setEcgFile] = useState(null); // State for the file

  // State for loading and response
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");


const getUserIdFromToken = () => {
  try {
    const token = localStorage.getItem("access_token"); // wherever you stored it
    if (!token) return null;

    const decoded = jwtDecode(token);
    return decoded.userId; // field from your JWT
  } catch (err) {
    console.error("Invalid Token", err);
    return null;
  }
};


  // Handler for file selection (works with the hidden input)
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const allowedTypes = ["image/png", "image/jpeg", "application/octet-stream"]; // .mat might be octet-stream
      
      // Basic validation
      if (file.size > 10 * 1024 * 1024) {
           setMessage("File is too large (max 10MB).");
           return;
      }
      
      // Note: MIME type for .mat is tricky. We'll rely on backend validation.
      setEcgFile(file);
      setMessage(`File selected: ${file.name}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // --- Validation ---
    if (
      !ecgFile ||
      !age ||
      gender === "Select gender" ||
      smoking === "Select smoking history"
    ) {
      setMessage("Please fill in all required fields and upload an ECG file.");
      setLoading(false);
      return;
    }

    // --- IMPORTANT ---
    // You MUST get the patient's ID from your authentication system
    // (e.g., from context, local storage, Redux) after they log in.
    // I am hardcoding it here as a placeholder.
  const patientId = getUserIdFromToken();

  if (!patientId) {
    setMessage("Authentication error: Patient ID not found");
    setLoading(false);
    return;
  } // <-- REPLACE THIS
    // -----------------

    // We must use FormData to send files
    const formData = new FormData();
    formData.append("ecgFile", ecgFile); // 'ecgFile' MUST match backend
    formData.append("patientId", patientId);
    formData.append("age", age);
    formData.append("gender", gender);
    formData.append("cholesterolLevel", cholesterol);
    formData.append("smokingHistory", smoking);
    formData.append("bloodPressure", bloodPressure);

    try {
      // --- THIS IS THE FIX ---
      // Construct the full URL from your .env variable
      const API_URL = `${process.env.REACT_APP_API_URL}/api/ecg/submit`;

      // Send the request to your new backend endpoint
      const response = await axios.post(
        API_URL, // Use the full, constructed URL
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            // You may need to add your auth token here
            // 'Authorization': `Bearer ${your_auth_token}`
          },
        }
      );

      setLoading(false);
      setMessage(response.data.message || "Upload successful!");
      // Optionally, reset the form
      setAge("");
      setGender("Select gender");
      setCholesterol("");
      setSmoking("Select smoking history");
      setBloodPressure("");
      setEcgFile(null);

    } catch (error) {
      setLoading(false);
      setMessage(
        error.response?.data?.message || "An error occurred during upload."
      );
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - File Upload */}
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h2 className="text-lg font-semibold mb-4">Upload Your ECG</h2>
          <p className="text-sm text-gray-500 mb-6">
            Upload your ECG file and provide clinical information for AI
            analysis
          </p>
          
          {/* We link the label to the hidden file input */}
          <label
            htmlFor="file-upload"
            className="border-2 border-dashed border-gray-300 rounded-lg py-16 px-4 block cursor-pointer"
          >
            <div className="flex flex-col items-center">
              <img src="/assest/upload-icon.png" alt="icon" />
              <p className="text-sm text-gray-600">
                {ecgFile ? ecgFile.name : "Drag and drop or click to upload"}
              </p>
              <p className="text-xs text-gray-400 mb-4">
                Supported formats: .png, .jpg, .mat
              </p>
              <div className="bg-[#45090B] text-white px-4 py-2 rounded-md hover:bg-[#300607] transition">
                Browse Files
              </div>
            </div>
          </label>
          
          {/* This input is hidden but triggered by the label/button above */}
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept=".png,.jpg,.jpeg,.mat"
          />
        </div>

        {/* Right Section - Clinical Info Form */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-6">Clinical Information</h3>
          {/* We wrap the form in an <form> tag to use the onSubmit handler */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Age
              </label>
              <input
                type="number"
                placeholder="Enter age"
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                className="mt-1 w-full border border-gray-300 rounded-md p-2 bg-gray-100"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option disabled>Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Cholesterol Level (mg/dL)
              </label>
              <input
                type="text"
                placeholder="Enter cholesterol level"
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
                value={cholesterol}
                onChange={(e) => setCholesterol(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Smoking History
              </label>
              <select
                className="mt-1 w-full border border-gray-300 rounded-md p-2 bg-gray-100"
                value={smoking}
                onChange={(e) => setSmoking(e.target.value)}
                required
              >
                <option disabled>Select smoking history</option>
                <option>Never</option>
                <option>Former</option>
                <option>Current</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Blood Pressure (mmHg)
              </label>
              <input
                type="text"
                placeholder="e.g., 120/80"
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
                value={bloodPressure}
                onChange={(e) => setBloodPressure(e.target.value)}
              />
            </div>
            
            {/* The submit button is now part of the <form> */}
            {/* We move it inside this section */}
            <div className="mt-[50px]">
              <button
                type="submit" // Set type to submit
                className="w-full bg-[#2D0101] h-[75px] text-[#fff] rounded-xl text-[18px] font-semibold mb-4 flex items-center justify-center gap-5 tracking-[0.8px] disabled:opacity-50"
                disabled={loading} // Disable button while loading
              >
                <img src="/assest/submit.png" alt="icon" />
                <p>{loading ? "Submitting..." : "Submit for AI analysis"}</p>
              </button>
              
              {/* Message area for success or error */}
              {message && (
                <p className="text-center text-sm text-gray-600">{message}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}