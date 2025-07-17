import "./App.css";
import "./index.css";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import HomePage from "./pages/HomePage"; // veya üstte tanımla
import MobileHomeHeader from "./components/mobilHomeHeader";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="block lg:hidden">
        <MobileHomeHeader />
      </div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* Diğer rotalar buraya eklenebilir */}
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
