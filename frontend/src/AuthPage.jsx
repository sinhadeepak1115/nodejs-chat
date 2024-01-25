import axios from "axios";

const AuthPage = (props) => {
  // onSubmit function handles the form submission
  const onSubmit = (e) => {
    e.preventDefault();

    // Extracting the username value from the form input
    const { value } = e.target[0];

    // Making a POST request to the authentication endpoint with the provided username
    axios
      .post("http://localhost:3001/authenticate", { username: value })
      .then((r) => {
        // If the authentication is successful, invoke the onAuth callback with the user data
        props.onAuth({ ...r.data, secret: value });
      })
      .catch((e) => {
        // Log an error message if there's an issue with authentication
        console.log("Auth Error", e);
      });
  };

  return (
    <div className="background">
      {/* Authentication form */}
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>

        <div className="form-subtitle">Set a username to get started</div>

        {/* Username input field and submit button */}
        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
