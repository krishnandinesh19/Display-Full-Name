import React, { useState } from "react";
import "./FullNameDisplay.css";

const FullNameDisplay = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [formValid, setFormValid] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    validateForm(e.target.value, lastName);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    validateForm(firstName, e.target.value);
  };

  const validateForm = (first, last) => {
    setFormValid(first.trim() !== "" && last.trim() !== "");
  };

  const displayFullName = (e) => {
    e.preventDefault();
    if (formValid) {
      setFullName(`${firstName} ${lastName}`);
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <div className="displayName">
      <h2>Full Name Display</h2>
      <form onSubmit={displayFullName}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </div>
        <button type="submit">submit</button>
      </form>
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
};

export default FullNameDisplay;