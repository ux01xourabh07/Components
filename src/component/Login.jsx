import React, { useState } from "react";

function Login() {
  const [value, setValue] = useState({
    Name: "",
    phone: "",
    message: "",
    gender: "",
    subject: "",
  });

  // Handle all inputs
  function handleName(e) {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  }

  // Submit Form
  function handleSubmit(e) {
    e.preventDefault();
    console.log(value);
  }

  // Reset Form
  function resetForm() {
    setValue({
      Name: "",
      phone: "",
      message: "",
      gender: "",
      subject: "",
    });
  }

  return (
    <div className="bg-white rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.2)] p-5 w-[500px] mx-auto mt-5">
      <h1 className="text-2xl font-bold text-center text-[#4206a3] mb-5">
        Login Form
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        {/* Name */}
        <div>
          <label>Name*</label>
          <input
            type="text"
            name="Name"
            value={value.Name}
            onChange={handleName}
            placeholder="Enter your name"
            className="w-full border rounded p-2"
          />
        </div>

        {/* Phone */}
        <div>
          <label>Phone*</label>
          <input
            type="text"
            name="phone"
            value={value.phone}
            onChange={handleName}
            placeholder="Enter phone number"
            className="w-full border rounded p-2"
          />
        </div>

        {/* Message */}
        <div>
          <label>Message</label>
          <textarea
            name="message"
            value={value.message}
            onChange={handleName}
            rows="5"
            placeholder="Enter your message"
            className="w-full border rounded p-2"
          ></textarea>
        </div>

        {/* Gender */}
        <div>
          <label>Gender*</label>

          <div className="flex gap-5 mt-2">

            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={value.gender === "Male"}
                onChange={handleName}
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={value.gender === "Female"}
                onChange={handleName}
              />
              Female
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={value.gender === "Other"}
                onChange={handleName}
              />
              Other
            </label>

          </div>
        </div>

        {/* Subject */}
        <div>
          <label>Subject</label>

          <select
            name="subject"
            value={value.subject}
            onChange={handleName}
            className="w-full border rounded p-2"
          >
            <option value="">Select Subject</option>
            <option value="React">React</option>
            <option value="JavaScript">JavaScript</option>
            <option value="NodeJS">NodeJS</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">

          <button
            type="button"
            onClick={resetForm}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Reset
          </button>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>

        </div>
      </form>
    </div>
  );
}

export default Login;