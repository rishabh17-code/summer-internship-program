import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
  });

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh

    console.log("Form Data:", formData);

    alert("Form Submitted Successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label><br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </div>

      <br />

      <div>
        <label>Email:</label><br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </div>

      <br />

      <div>
        <label>Password:</label><br />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
        />
      </div>

      <br />

      <div>
        <label>Gender:</label><br />

        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={handleChange}
        />{" "}
        Male

        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={handleChange}
        />{" "}
        Female
      </div>

      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;