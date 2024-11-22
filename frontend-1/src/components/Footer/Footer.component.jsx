import { Link } from "react-router-dom";
import "./Footer.style.css";

export const Footer = () => {
  return (
    <footer className="footer p-5">
      <h2 className="heading mb-4">Water Well Predictor</h2>

      <ul className="flex flex-wrap gap-6 text-sm md:text-base">
        <li>
          <Link to="guideline">Guidelines & Recommendations</Link>
        </li>
        <li>
          <Link to="resources">Resources and Documentation</Link>
        </li>
      </ul>
    </footer>
  );
};
