import "./Error.css";

export default function Errormessage() {
  return (
    <>
      <div className="error-div">
        <h1>Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <a href="/">Go to the home page</a>
      </div>
    </>
  );
}
