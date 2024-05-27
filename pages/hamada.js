import React, { useState } from "react";

function CharacterCounter() {
  const [count, setCount] = useState();
  const handleChange = (e) => {
    setCount(e.target.value.length);
  };

  return (
    <div>
      <textarea onChange={handleChange} />
      <h1>Character count: {count}</h1>
    </div>
  );
}

export default CharacterCounter;
