import React, { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const SurveyForm: React.FC = () => {
  const [name, setName] = useState("");
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Submitting: Name = ${name}, Answer = ${answer}`);

    try {
      const docRef = await addDoc(collection(db, "responses"), {
        name,
        answer,
      });
      console.log("Document written with ID: ", docRef.id);
      setSubmitted(true);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
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
