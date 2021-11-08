import { ProductInfo } from "../business-components/ProductInfo";
import { UserInfo } from "../business-components/UserInfo";
import { products, people } from "../data";
import { RegularList } from "../layout/components/RegularList";
import SplitScreen from "../layout/split-screen";

export const SplitScreenAndList = () => {
  return (
    <>
      <SplitScreen leftWeight="2">
        <RegularList
          items={products}
          resourceName="product"
          itemComponent={ProductInfo}
        />
        <RegularList
          items={people}
          resourceName="user"
          itemComponent={UserInfo}
        />
      </SplitScreen>
    </>
  );
};
