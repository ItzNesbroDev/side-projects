import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gmail, setGmail] = useState("");

  const generateGmail = () => {
    if (!firstName) {
      alert("Please provide a first name.");
    } else {
      const randomNumber1 = Math.floor(Math.random() * 10);
      const randomNumber2 = Math.floor(Math.random() * 10);
      const name = lastName ? firstName + lastName : firstName;
      const gmail = `${name}${randomNumber1}${randomNumber2}@gmail.com`;
      setGmail(gmail);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h1 className="text-2xl font-bold mb-4">
          Generate a Random Gmail Account
        </h1>

        <div className="mb-4">
          <label htmlFor="first-name" className="block font-semibold mb-2">
            First Name:
          </label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full border-2 border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="last-name" className="block font-semibold mb-2">
            Last Name (optional):
          </label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full border-2 border-gray-300 rounded-md p-2"
          />
        </div>

        <button
          onClick={generateGmail}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Generate Gmail
        </button>

        {gmail && (
          <p className="mt-4">
            <strong>Your Gmail account is:</strong> {gmail}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
