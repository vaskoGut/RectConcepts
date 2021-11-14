import "./styles.css";
import UseCallbackExplanation from "../src/useCallbackExplanation/UseCallback";
import Profile from "../src/reduxExplanation/components/Profile";
import Login from "../src/reduxExplanation/components/Login";
import ChangeColor from "../src/reduxExplanation/components/ChangeColor";

export default function App() {
  return (
    <div className="App">
      test
      <UseCallbackExplanation />
      <Login />
      <Profile />
      <ChangeColor />
    </div>
  );
}
