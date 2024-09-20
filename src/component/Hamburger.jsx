import "./Hamburger.css";

export default function Hamburger({ onClick, isActive }) {
  return (
    <div
      className="burger-div"
      onClick={onClick}
      aria-label="Toggle navigation menu"
      aria-expanded={isActive}
    >
      <div className={`burger ${isActive ? "active" : ""}`}></div>
      <div className={`burger ${isActive ? "active" : ""}`}></div>
      <div className={`burger ${isActive ? "active" : ""}`}></div>
    </div>
  );
}
