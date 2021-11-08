import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import { OnboardingFlows } from "./pages/OnboardingFlows";
import { Modals } from "./pages/Modals";
import { Forms } from "./pages/Forms";
import { Loaders } from "./pages/Loaders";
import { SplitScreenAndList } from "./pages/SplitScreenAndList";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/onboarding-flows" element={<OnboardingFlows />} />
      <Route path="/modals" element={<Modals />} />
      <Route path="/forms" element={<Forms />} />
      <Route path="/loaders" element={<Loaders />} />
      <Route path="/split-screen-and-list" element={<SplitScreenAndList />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
