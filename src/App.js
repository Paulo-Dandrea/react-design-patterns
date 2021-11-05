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

export default function App() {
  return (
    <div>
      <Modal openModalButtonText={"Get User"}>
        <UserLoader userId="2">
          <UserInfo />
        </UserLoader>
      </Modal>
      
      <Modal openModalButtonText={"Current User"}>
        <CurrentUserLoader>
          Current User Loader:
          <UserInfo />
        </CurrentUserLoader>
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
