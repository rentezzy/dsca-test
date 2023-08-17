import { Advantages } from "./components/advantages/Advantages";
import Header from "./components/header/Header";
import { Prices } from "./components/prices/Prices";
import { Services } from "./components/services/Services";
import { Tracking } from "./components/tracking/Tracking";
import Welcome from "./components/welcome/Welcome";

function App() {
  return (
    <div>
      <Header />
      <Welcome />
      <Advantages />
      <Services />
      <Prices />
      <Tracking />
    </div>
  );
}

export default App;
