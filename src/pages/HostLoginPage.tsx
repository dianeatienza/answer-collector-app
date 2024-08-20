import React from "react";
import {
  auth,
  signInWithPopup,
  GoogleAuthProvider,
} from "../firebase/firebase";

const HostLoginPage: React.FC = () => {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User signed in:", result.user);
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
};
//
export default HostLoginPage;
