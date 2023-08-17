import { Advantages } from "./components/advantages/Advantages";
import { Faq } from "./components/faq/Faq";
import Header from "./components/header/Header";
import { Prices } from "./components/prices/Prices";
import { Reviews } from "./components/reviews/Reviews";
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
      <div className="reviews_faq">
        <Reviews />
        <Faq />
      </div>
    </div>
  );
}

export default App;
