import React, { useState, useEffect } from "react";
import SurveyForm from "./pages/SurveyForm";
import HostView from "./pages/HostViewPage";
import Login from "./pages/HostLoginPage";
import { auth } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const App: React.FC = () => {
  const [isHost, setIsHost] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsHost(true);
      } else {
        setIsHost(false);
      }
    });
  }, []);

  return (
    <div>
      <h1>Have fun and relax!</h1>
      {isHost ? <HostView /> : <SurveyForm />}
      {!isHost && <Login />}
    </div>
  );
};

export default App;
