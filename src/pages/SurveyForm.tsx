import React, { useState } from "react";

const SurveyForm: React.FC = () => {
  const [name, setName] = useState("");
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Submitting: Name = ${name}, Answer = ${answer}`);
    const userResponse = { name, answer };
    localStorage.setItem(`response-${name}`, JSON.stringify(userResponse));
    setSubmitted(true);
    console.log("Response saved to local storage");
  };

  return (
    <div>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Your answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>Thank you for your response!</p>
      )}
    </div>
  );
};

export default SurveyForm;
