import { Link } from "react-router-dom";
import { UserInfo } from "../business-components/UserInfo";
import { printProps } from "../HOCs/printProps";

const UserInfoWrapper = printProps(UserInfo);

export const PrintingProps = () => (
  <>
    <Link to="/">Home</Link>
    <UserInfoWrapper a={1} b={"hello"} />
  </>
);
