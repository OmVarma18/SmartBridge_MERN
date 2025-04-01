import { useState } from "react";

const TextUpdater = () => {
  const [text, setText] = useState("");

  return (
    <div className="p-4">
      <input
        type="text"
        className="border p-2 rounded-md"
        placeholder="Type here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-2 text-lg font-semibold">You typed: {text}</p>
    </div>
  );
};

export default TextUpdater;
