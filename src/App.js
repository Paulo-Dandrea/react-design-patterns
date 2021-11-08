import { Link } from "react-router-dom";

const baseURL = "http://localhost:8080";

export default function App() {
  return (
    <div>
      <Link to="/onboarding-flows">Onboarding Flows</Link>
      <Link to="/modals">Modals</Link>
      <Link to="/forms">Forms</Link>
      <Link to="/loaders">Loaders</Link>
      <Link to="/split-screen-and-list">Split Screen</Link>
    </div>
  );
}
