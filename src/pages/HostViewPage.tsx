import React, { useEffect, useState } from "react";
import { db, collection, getDocs } from "../firebase/firebase";

const HostView: React.FC = () => {
  const [responses, setResponses] = useState<
    { name: string; answer: string }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "responses"));
      const allResponses = querySnapshot.docs.map(
        (doc) => doc.data() as { name: string; answer: string }
      );
      setResponses(allResponses);
      console.log("All responses loaded:", allResponses);
    };

    fetchData();
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
