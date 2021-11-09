import { Link } from "react-router-dom";
import { UserInfo } from "../business-components/UserInfo";
import { withUser } from "../HOCs/withUser";
import { ResourceInfoForm } from "../layout/components/ResourceInfoForm";
import { UserInfoForm } from "../layout/components/UserInfoForm";

export const WithUser = () => {
  const UserInfoWithLoader = withUser(UserInfo, "2");

  return (
    <>
      <Link to="/">Home</Link> 
      <UserInfoWithLoader userId="2" />
      <UserInfoForm />
      <ResourceInfoForm />
    </>
  );
};
