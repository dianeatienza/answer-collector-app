import React from "react";
import SurveyForm from "./pages/SurveyForm";
import HostView from "./pages/HostViewPage";

const App: React.FC = () => {
  const isHost = window.location.pathname === "/host"; // Example: host accesses via "/host"

  return (
    <div>
      <h1>Survey App</h1>
      {isHost ? <HostView /> : <SurveyForm />}
    </div>
  );
};

export default App;
