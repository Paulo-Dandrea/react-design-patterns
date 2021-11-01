import SplitScreen from "./layout/split-screen";
import "./styles.css";

export default function App() {
  return (
    <SplitScreen
      left={() => <h1>Esquerda</h1>}
      right={() => <h1>Direita</h1>}
    />
  );
}
