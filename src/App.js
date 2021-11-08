import { useState } from "react";
// Data
import { people, products } from "./data";
// Layout
import { RegularList } from "./layout/components/RegularList";
import SplitScreen from "./layout/split-screen";
import { UncontrolledModal } from "./layout/components/UncontrolledModal";
// Business Components
import { UserInfo } from "./business-components/UserInfo";
import { ProductInfo } from "./business-components/ProductInfo";
import { CurrentUserLoader } from "./containers/CurrentUserLoader";
import { UserLoader } from "./containers/UserLoader";
import { ResourceLoader } from "./containers/ResouceLoader";
import { DataSource } from "./containers/DataSource";
import axios from "axios";
import { UncontrolledForm } from "./layout/components/UncontrolledForm";
import { ControlledForm } from "./layout/components/ControlledForm";
import { ControlledModal } from "./layout/components/ControlledModal";
import { UncontrolledOnboardingFlow } from "./layout/components/UncontrolledOnboardingFlow";
import { ControlledOnboardingFlow } from "./layout/components/ControlledOnboardingFlow";
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
