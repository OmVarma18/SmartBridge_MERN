import { useState } from "react";

const SimpleForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Value:", inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        className="border p-2 rounded-md"
        placeholder="Enter something..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        type="submit"
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default SimpleForm;
