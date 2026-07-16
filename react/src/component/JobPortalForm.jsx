import { useState } from "react";

function JobPortalForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    gender: "",
    age: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Job Portal Form Data");
    console.log(formData);

    alert("Registration Successful!");

    setFormData({
      name: "",
      email: "",
      contact: "",
      gender: "",
      age: "",
    });
  };

  return (
    <div>
      <h2>Job Portal Registration Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label>Name:</label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        {/* Email */}
        <div>
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        {/* Contact */}
        <div>
          <label>Contact Number:</label>
          <br />
          <input
            type="tel"
            name="contact"
            placeholder="Enter your contact number"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        {/* Gender */}
        <div>
          <label>Gender:</label>
          <br />

          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
          />
          Male

          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
            style={{ marginLeft: "15px" }}
          />
          Female
        </div>

        <br />

        {/* Age */}
        <div>
          <label>Age:</label>
          <br />
          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default JobPortalForm;