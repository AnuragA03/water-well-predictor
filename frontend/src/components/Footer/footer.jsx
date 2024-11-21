import "./footer.css";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="footer p-5">
      <h2 className="heading mb-4">Water Well Predictor</h2>

      <ul className="flex flex-wrap gap-6 text-sm md:text-base">
        <li>
          <Link href="/Guideline">Guidelines & Recommendations</Link>
        </li>
        <li>
          <Link href="/Resources">Resources and Documentation</Link>
        </li>
      </ul>
    </footer>
  );
}
