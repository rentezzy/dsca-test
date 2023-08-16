import { Advantages } from "./components/advantages/Advantages";
import Header from "./components/header/Header";
import { Services } from "./components/services/Services";
import Welcome from "./components/welcome/Welcome";

function App() {
  return (
    <div>
      <Header />
      <Welcome />
      <Advantages />
      <Services />
    </div>
  );
}

export default App;
