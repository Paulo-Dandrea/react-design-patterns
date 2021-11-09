import { useState } from "react";

import { Link } from "react-router-dom";

import { UserInfo } from "../business-components/UserInfo";
import { CurrentUserLoader } from "../container-components/CurrentUserLoader";

import { ControlledModal } from "../layout/components/ControlledModal";
import { UncontrolledModal } from "../layout/components/UncontrolledModal";
import SplitScreen from "../layout/split-screen";

const Text = ({ text }) => <div>{text}</div>;

export const Modals = () => {
  const [shouldShowModal, setShouldShowModal] = useState(false);

  return (
    <>
      <Link to="/">Home</Link>

      <SplitScreen>
        <div>
          <ControlledModal
            shouldShow={shouldShowModal}
            onRequestClose={() => setShouldShowModal(false)}
          >
            <Text text="Controlled modal" />
          </ControlledModal>
          <button onClick={() => setShouldShowModal(!shouldShowModal)}>
            {shouldShowModal ? "Hide Modal" : "Show Controlled Modal"}
          </button>
        </div>
        
        <UncontrolledModal
          openModalButtonText={"Current User with Uncontrolled Modal"}
        >
          <CurrentUserLoader>
            <UserInfo />
          </CurrentUserLoader>
        </UncontrolledModal>
      </SplitScreen>
    </>
  );
};
