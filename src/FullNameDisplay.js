import React, { useState } from "react";

const FullNameDisplay = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

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
      setShowAlert(false);
    } else {
      setShowAlert(true);
    }
  };

  return (
    <div className="displayName">
      <h2>Display Full Name</h2>
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
        <button type="submit">Submit</button>
      </form>
      {showAlert && (
        <p style={{ color: "red" }}>
          Please fill in both first name and last name.
        </p>
      )}
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
};

export default FullNameDisplay;
