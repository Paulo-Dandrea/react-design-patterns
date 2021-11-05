// Data
import { people, products } from "./data";
// Layout
import { RegularList } from "./layout/components/RegularList";
import SplitScreen from "./layout/split-screen";
import { Modal } from "./layout/components/Modal";
// Business Components
import { UserInfo } from "./business-components/UserInfo";
import { ProductInfo } from "./business-components/ProductInfo";

export default function App() {
  return (
    <div>
      <SplitScreen leftWeight="2">
        <RegularList
          items={people}
          resourceName="user"
          itemComponent={UserInfo}
        />
        <Modal openModalButtonText={"Open product list summary"}>
          <RegularList
            items={products}
            resourceName="product"
            itemComponent={ProductInfo}
          />
        </Modal>
      </SplitScreen>
    </div>
  );
}