import { RegularList } from "./layout/components/RegularList";
import SplitScreen from "./layout/split-screen";

const LeftHand = () => <h1 style={{ background: "crimson" }}>Esquerda</h1>;
const RightHand = () => <h1 style={{ background: "orange" }}>Esquerda</h1>;

export default function App() {
  return (
    <div>
      <RegularList />
      hello
      <SplitScreen leftWeight="3">
        <LeftHand />
        <RightHand />
      </SplitScreen>
    </div>
  );
}
