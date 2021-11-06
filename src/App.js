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

const baseURL = "http://localhost:8080";

const getServerData = async (url) => {
  const response = await axios.get(url, { baseURL });
  return response.data;
};

const getLocalStorage = async (key) => {
  const item = localStorage.getItem(key);
  return JSON.parse(item);
};

const Text = ({ text }) => <div>{text}</div>;

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step One</h1>
    <button onClick={() => goToNext({ name: "John" })}>Next</button>
  </>
);
const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step Two</h1>
    <button onClick={() => goToNext({ age: 100 })}>Next</button>
  </>
);
const StepThree = ({ goToNext }) => (
  <>
    <h1>Step Three</h1>
    <button onClick={() => goToNext({ hairColor: "brown" })}>Next</button>
  </>
);

export default function App() {
  const [shouldShowModal, setShouldShowModal] = useState(false);

  return (
    <div>
      <UncontrolledOnboardingFlow
        onFinish={(data) => {
          console.log(data);
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledOnboardingFlow>

      <ControlledModal
        shouldShow={shouldShowModal}
        onRequestClose={() => setShouldShowModal(false)}
      >
        <Text text="Controlled modal" />
      </ControlledModal>
      <button onClick={() => setShouldShowModal(!shouldShowModal)}>
        {shouldShowModal ? "Hide Modal" : "Show Controlled Modal"}
      </button>

      <UncontrolledForm />
      <ControlledForm />

      <UncontrolledModal openModalButtonText={"Get User"}>
        <UserLoader userId="2">
          <UserInfo />
        </UserLoader>
      </UncontrolledModal>

      <UncontrolledModal openModalButtonText={"Current User"}>
        <CurrentUserLoader>
          <UserInfo />
        </CurrentUserLoader>
      </UncontrolledModal>
      {/* Doing the same thing with ResourceLoader, a dynamic version of the loader */}
      <UncontrolledModal
        openModalButtonText={"Current user with ResourceLoader"}
      >
        <ResourceLoader resourceUrl="/current-user" resourceName="user">
          <UserInfo />
        </ResourceLoader>
      </UncontrolledModal>

      <UncontrolledModal
        openModalButtonText={"get Product with ResourceLoader"}
      >
        <ResourceLoader resourceUrl="/products/2" resourceName="product">
          <ProductInfo />
        </ResourceLoader>
      </UncontrolledModal>

      <UncontrolledModal openModalButtonText={"get Product from Data Source"}>
        <DataSource
          getDataFunc={() => getServerData("/products/2")}
          resourceName="product"
        >
          <ProductInfo />
        </DataSource>
      </UncontrolledModal>

      <UncontrolledModal openModalButtonText={"get message from localStorage"}>
        <DataSource
          getDataFunc={() => getLocalStorage("message")}
          resourceName="text"
        >
          <Text />
        </DataSource>
      </UncontrolledModal>

      <SplitScreen leftWeight="2">
        <UncontrolledModal openModalButtonText={"Open product list summary"}>
          <RegularList
            items={products}
            resourceName="product"
            itemComponent={ProductInfo}
          />
        </UncontrolledModal>
        <RegularList
          items={people}
          resourceName="user"
          itemComponent={UserInfo}
        />
      </SplitScreen>
    </div>
  );
}
