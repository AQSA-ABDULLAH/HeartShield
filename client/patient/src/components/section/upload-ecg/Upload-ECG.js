export default function Uploader() {
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
          <div className="border-2 border-dashed border-gray-300 rounded-lg py-16 px-4">
            <div className="flex flex-col items-center">
               <img src="/assest/upload-icon.png" alt="icon" />
              <p className="text-sm text-gray-600">
                Drag and drop your ECG file here
              </p>
              <p className="text-xs text-gray-400 mb-4">
                Supported formats: .png, .jpg, .mat
              </p>
              <button className="bg-[#45090B] text-white px-4 py-2 rounded-md hover:bg-[#300607] transition">
                Browse Files
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Clinical Info Form */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-6">Clinical Information</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Age
              </label>
              <input
                type="number"
                placeholder="Enter age"
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select className="mt-1 w-full border border-gray-300 rounded-md p-2 bg-gray-100">
                <option>Select gender</option>
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
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Smoking History
              </label>
              <select className="mt-1 w-full border border-gray-300 rounded-md p-2 bg-gray-100">
                <option>Select smoking history</option>
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
                placeholder="Enter blood pressure"
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="mt-[50px]">
        <button className="w-full bg-[#2D0101] h-[75px] text-[#fff] rounded-xl text-[18px] font-semibold mb-8 flex items-center justify-center gap-5 tracking-[0.8px]">
          <img src="/assest/submit.png" alt="icon" />
          <p>Submit for AI analysis</p>
        </button>
      </div>
    </div>
  );
}
