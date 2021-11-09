import axios from "axios";
import { ProductInfo } from "../business-components/ProductInfo";
import { UserInfo } from "../business-components/UserInfo";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { useDataSource } from "../hooks/useDataSource";
import { userResource } from "../hooks/useResource";
import { useUser } from "../hooks/useUser";

const serverResource = (resourceUrl) => async () => {
  const response = await axios.get(resourceUrl);
  return response.data;
};

const localStorageResource = (key) => () => {
  return localStorage.getItem(key);
};

export const UsingHooks = () => {
  const targetUser = useUser("2");
  const targetProduct = userResource(`/products/3`);
  const user = useDataSource(serverResource(`/users/3`));
  const message = useDataSource(localStorageResource("message"));

  return (
    <>
      <UserInfo user={targetUser} />
      <ProductInfo product={targetProduct} />
      <UserInfo user={user} />
      <p>{message}</p>
    </>
  );
};
