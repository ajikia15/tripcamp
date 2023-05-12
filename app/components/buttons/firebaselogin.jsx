import firebaseConfig from "../../../firebase-config";

function MyComponent() {
  const handleLogin = () => {
    firebaseConfig
      .auth()
      .signInAnonymously()
      .then((userCredential) => {
        // Handle successful login
        const user = userCredential.user;
        console.log("Anonymous user ID:", user.uid);
      })
      .catch((error) => {
        // Handle login error
        console.error("Anonymous login failed:", error);
      });
  };

  return (
    <button onClick={handleLogin}>Login anonymously</button>
  );
}
