import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import { OnboardingFlows } from "./pages/OnboardingFlows";
import { Modals } from "./pages/Modals";
import { Forms } from "./pages/Forms";
import { Loaders } from "./pages/Loaders";
import { SplitScreenAndList } from "./pages/SplitScreenAndList";
import { PrintingProps } from "./pages/PrintingProps";
import { WithUser } from "./pages/WithUser";
import { UsingHooks } from "./pages/UsingHooks";
import { UsingRecursiveComponent } from "./pages/UsingRecursiveComponentAndComposition";

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
      <Route path="/print-props" element={<PrintingProps />} />
      <Route path="/with-user" element={<WithUser />} />
      <Route path="/hooks" element={<UsingHooks />} />
      <Route
        path="/recursive-component"
        element={<UsingRecursiveComponent />}
      />
    </Routes>
  </BrowserRouter>,
  rootElement
);
