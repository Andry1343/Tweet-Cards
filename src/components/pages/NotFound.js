import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <p>Page not found</p>

      <button>
        <Link to="/">Back to home page</Link>
      </button>
    </div>
  );
}
