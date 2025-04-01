import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-md"
    >
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input
        type="email"
        className="border p-2 w-full rounded-md mb-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="border p-2 w-full rounded-md mb-2"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 w-full rounded-md hover:bg-blue-600"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
