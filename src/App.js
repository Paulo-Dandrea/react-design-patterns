// Data
import { people, products } from "./data";
// Layout
import { RegularList } from "./layout/components/RegularList";
import SplitScreen from "./layout/split-screen";
import { Modal } from "./layout/components/Modal";
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

export default function App() {
  return (
    <div>
      <UncontrolledForm />
      <ControlledForm />

      <Modal openModalButtonText={"Get User"}>
        <UserLoader userId="2">
          <UserInfo />
        </UserLoader>
      </Modal>

      <Modal openModalButtonText={"Current User"}>
        <CurrentUserLoader>
          <UserInfo />
        </CurrentUserLoader>
      </Modal>
      {/* Doing the same thing with ResourceLoader, a dynamic version of the loader */}
      <Modal openModalButtonText={"Current user with ResourceLoader"}>
        <ResourceLoader resourceUrl="/current-user" resourceName="user">
          <UserInfo />
        </ResourceLoader>
      </Modal>

      <Modal openModalButtonText={"get Product with ResourceLoader"}>
        <ResourceLoader resourceUrl="/products/2" resourceName="product">
          <ProductInfo />
        </ResourceLoader>
      </Modal>

      <Modal openModalButtonText={"get Product from Data Source"}>
        <DataSource
          getDataFunc={() => getServerData("/products/2")}
          resourceName="product"
        >
          <ProductInfo />
        </DataSource>
      </Modal>


      <Modal openModalButtonText={"get message from localStorage"}>
        <DataSource
          getDataFunc={() => getLocalStorage("message")}
          resourceName="text"
        >
          <Text />
        </DataSource>
      </Modal>


      <SplitScreen leftWeight="2">
        <Modal openModalButtonText={"Open product list summary"}>
          <RegularList
            items={products}
            resourceName="product"
            itemComponent={ProductInfo}
          />
        </Modal>
        <RegularList
          items={people}
          resourceName="user"
          itemComponent={UserInfo}
        />
      </SplitScreen>
    </div>
  );
}
