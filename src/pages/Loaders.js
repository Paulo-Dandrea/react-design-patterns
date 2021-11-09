import { ProductInfo } from "../business-components/ProductInfo";
import { UserInfo } from "../business-components/UserInfo";
import { CurrentUserLoader } from "../container-components/CurrentUserLoader";
import { DataSource } from "../container-components/DataSource";
import { ResourceLoader } from "../container-components/ResouceLoader";
import { UserLoader } from "../container-components/UserLoader";

const getServerData = async (url) => {
  const response = await axios.get(url, { baseURL });
  return response.data;
};

const getLocalStorage = async (key) => {
  const item = localStorage.getItem(key);
  return JSON.parse(item);
};

const Text = ({ text }) => <div>{text}</div>;

export const Loaders = () => {
  return (
    <>
      <h3>Loader container</h3>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>

      <h3>Loader container with dynamic id</h3>
      <UserLoader userId="2">
        <UserInfo />
      </UserLoader>

      <h3>
        Loader container that can load any time of resource by the url props
      </h3>

      <ResourceLoader resourceUrl="/current-user" resourceName="user">
        <UserInfo />
      </ResourceLoader>

      <ResourceLoader resourceUrl="/products/2" resourceName="product">
        <ProductInfo />
      </ResourceLoader>

      <h3>
        Container that you pass the getter, the resource name and the children
        component
      </h3>

      <DataSource
        getDataFunc={() => getServerData("/products/2")}
        resourceName="product"
      >
        <ProductInfo />
      </DataSource>

      <DataSource
        getDataFunc={() => getLocalStorage("message")}
        resourceName="text"
      >
        <Text />
      </DataSource>
    </>
  );
};
