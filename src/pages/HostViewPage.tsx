import React, { useEffect, useState } from "react";

const HostView: React.FC = () => {
  const [responses, setResponses] = useState<
    { name: string; answer: string }[]
  >([]);

  useEffect(() => {
    const allResponses: { name: string; answer: string }[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      console.log(`Checking key: ${key}`);
      if (key && key.startsWith("response-")) {
        const response = localStorage.getItem(key);
        if (response) {
          allResponses.push(JSON.parse(response));
          console.log(`Response found: ${response}`);
        }
      }
    }
    setResponses(allResponses);
    console.log("All responses loaded:", allResponses);
  }, []);

  return (
    <div>
      <h2>All Responses:</h2>
      <ul>
        {responses.map((response, index) => (
          <li key={index}>
            {index + 1}. {response.name}: {response.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HostView;
